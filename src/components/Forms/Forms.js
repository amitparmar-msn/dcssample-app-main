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
    useEffect(() => {
        fetch('/user')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

        return () => {

        }
    }, [])

    return (
        <>
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
                        //alert("Please enter your name!");
                        event.preventDefault();
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
