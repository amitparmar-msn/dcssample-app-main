import React, { useState, useRef, useEffect } from "react";
import Card from "../UI/Card/Card";
import "./Forms.css";
const Forms = () => {
    const [fullname, setFullname] = useState("");
    const [course, setCourse] = useState("MCA");
    const nameRef = useRef(null)
    const handlerCourse = (event) => {
        setCourse(event.target.value);
    };
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        fetch('/user')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setUserList(data);
            })
            .catch(error => console.error(error));
    }, [])

    return (
        <>

            {userList.length > 0 ?
                <ul>
                    {
                        userList.map(function (item, index) {
                            return (
                                <li key={item._id}>{item.name}
                                    <button onClick={() => {
                                        const requestOptions = {
                                            method: 'DELETE',
                                            headers: { 'Content-Type': 'application/json' },
                                        };
                                        fetch(`/user/${item._id}`, requestOptions)
                                            .then(response => {
                                                if (response.status === 200) {
                                                    alert('Delete');
                                                    window.location.href = window.location.href;
                                                } else {
                                                    alert('Processing error...')
                                                }
                                                console.log(response);
                                            })
                                            .catch(error => console.error(error));
                                    }}>Delete</button>
                                    <button onClick={() => {

                                    }}>Edit</button>
                                </li>
                            )
                        })
                    }
                </ul>
                : null}
            <Card>
                <h2>Form</h2>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        alert(nameRef.current?.value)
                        if (fullname !== "")
                            alert(
                                `Welcome, ${fullname}. You have choosen ${course}!`
                            );
                        else setFullname('DCS')


                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                name: fullname,
                                course: course
                            })
                        };
                        fetch('/user', requestOptions)
                            .then(response => {
                                return response.json()
                            })
                            .then(data => {
                                console.log(data)
                                setUserList(data);
                            })
                            .catch(error => console.error(error));
                        //alert("Please enter your name!");
                    }}
                >
                    <label htmlFor="fullname">
                        Name
                        <input
                            ref={nameRef}
                            type="text"
                            name="fullname"
                            className="form-control"
                            id="fullname"
                            value={fullname}
                            onChange={(event) => {
                                setFullname(event.target.value);
                            }}
                        />
                    </label>
                    <label>
                        Course
                        <select
                            className="form-select"
                            id="course"
                            name="course"
                            value={course}
                            onChange={handlerCourse}
                        >
                            <option>BCA</option>
                            <option>BScIT</option>
                            <option>MCA</option>
                            <option>MScIT</option>
                        </select>
                    </label>

                    {fullname ? (
                        <label>
                            <strong>{fullname}</strong> has selected{" "}
                            <strong>{course}</strong>
                        </label>
                    ) : (
                        ""
                    )}
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </Card>
        </>
    );
};

export default Forms;
