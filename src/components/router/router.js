import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ExpenseItems from "../Expenses/ExpenseItems";
import "./router.css";
import Forms from "../Forms/Forms";

const PageRouter = () => {
    return (
        <>
            <div className="nav">
                <Link className="navlink" to="/">
                    Components & Props
                </Link>
                <Link className="navlink" to="/form">
                    Form & States
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<ExpenseItems />} />
                <Route path="/form" element={<Forms />} />
            </Routes>
        </>
    );
};

export default PageRouter;
