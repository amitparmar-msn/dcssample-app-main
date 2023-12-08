import React from "react";
import Card from "../UI/Card/Card";
import "./ExpenseItem.css";

const ExpenseItemDate = ({ date }) => {
    const month = date.toLocaleString("en-IN", { month: "long" });
    const day = date.toLocaleString("en-IN", { day: "2-digit" });
    const year = date.getFullYear();
    return (
        <Card className="expenses_item__date">
            <div className="day">{day}</div>
            <div className="month">{month}</div>
            <div className="year">{year}</div>
        </Card>
    );
};

export default ExpenseItemDate;
