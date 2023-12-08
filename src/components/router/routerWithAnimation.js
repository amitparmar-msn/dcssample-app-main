import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import ExpenseItems from "../Expenses/ExpenseItems";
import Forms from "../Forms/Forms";

import "./router.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const routerWithAnimation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
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
            <TransitionGroup>
                <CSSTransition
                    classNames="fade"
                    key={location.key}
                    onEnter={() => {
                        console.log("onEnter");
                        setIsLoading(true);
                    }}
                    onEntered={() => {
                        console.log("onEntered");
                        setIsLoading(false);
                    }}
                    timeout={2000}
                >
                    <Routes>
                        <Route path="/" element={<ExpenseItems />} />
                        <Route path="/form" element={<Forms />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};

export default routerWithAnimation;
