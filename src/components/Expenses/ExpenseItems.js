import React from "react";
import Card from "../UI/Card/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
const ExpenseItems = () => {
    const expenses = [
        {
            id: 1,
            title: "Car Service",
            date: new Date(2023, 6, 25),
            amount: 6000,
        },
        {
            id: 2,
            title: "Fuel",
            date: new Date(2023, 7, 4),
            amount: 3000,
        },
        {
            id: 3,
            title: "Fuel",
            date: new Date(2023, 9, 2),
            amount: 3000,
        },
        {
            id: 4,
            title: "Restaurant",
            date: new Date(2023, 6, 27),
            amount: 2000,
        },
    ];
    return (
        <>
            <Card className="expenses">
                {expenses.map(function (item) {
                    return (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            amount={item.amount}
                        />
                    );
                })}
            </Card>
        </>
    );
};

export default ExpenseItems;
