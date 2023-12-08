import React from "react";
import Card from "../UI/Card/Card";
import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ key, title, date, amount }) => {
    return (
        <>
            <Card className="expenses_item">
                <ExpenseItemDate date={date} />
                <div className="">
                    <div className="expenses_item__title">{title}</div>
                    <Card className="expenses_item__amount">
                        Rs. {amount}/-
                    </Card>
                </div>
            </Card>
        </>
    );
};

export default ExpenseItem;
