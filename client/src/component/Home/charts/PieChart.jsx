import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const PieChart = () => {
    const { totalIncome, incomeAll } = useSelector((state) => state.income);
    const { totalExpense, expenseAll } = useSelector((state) => state.expense);
  
    const [food, setfood] = useState([]);
    const [travel, settravel] = useState([]);
    const [entertainment, setentertainment] = useState([]);
    const [shopping, setshopping] = useState([]);
    const [billing, setbilling] = useState([]);
  
    useEffect(() => {
      // for all income
      const foodResult = expenseAll?.filter(
        (item) => item.category === "Food" && item
      );
      setfood(foodResult?.map((am) => am.amount));
      const freeResult = expenseAll?.filter(
        (item) => item.category === "Travel" && item
      );
      settravel(freeResult?.map((am) => am.amount));
      const entertainmentResult = expenseAll?.filter(
        (item) => item.category === "Entertainment" && item
      );
      setentertainment(entertainmentResult?.map((am) => am.amount));
      const shoppingResult = expenseAll?.filter(
        (item) => item.category === "Shoping" && item
      );
      setshopping(shoppingResult?.map((am) => am.amount));
      const billingResult = expenseAll?.filter(
        (item) => item.category === "Billing" && item
      );
      setbilling(billingResult?.map((am) => am.amount));
    }, [expenseAll]);
  
    const labels = ["food", "travel", "entertainment", "shopping", "Billing"];
  
    const foodTotalExpense = food?.reduce((acc, amount) => acc + amount, 0);
    const travelTotalExpense = travel?.reduce((acc, amount) => acc + amount, 0);
    const entertainmentTotalExpense = entertainment?.reduce(
      (acc, amount) => acc + amount,
      0
    );
    const shoppingTotalExpense = shopping?.reduce(
      (acc, amount) => acc + amount,
      0
    );
    const billingTotalExpense = billing?.reduce((acc, amount) => acc + amount, 0);
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Overall Expense",
          backgroundColor: [
            "#3498db",
            "#2ecc71",
            "#e74c3c",
            "#f39c12",
            "#9b59b6",
          ],
          borderColor: "transparent",
          data: [
            foodTotalExpense,
            travelTotalExpense,
            entertainmentTotalExpense,
            shoppingTotalExpense,
            billingTotalExpense,
          ],
        },
      ],
    };
  return (
    <div>
        <Pie data={data} />
    </div>
  )
}

export default PieChart
