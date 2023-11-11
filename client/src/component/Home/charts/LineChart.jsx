// ./components/LineChart.js

import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const LineChart = () => {
  const { totalIncome, incomeAll } = useSelector((state) => state.income);
  const { totalExpense, expenseAll } = useSelector((state) => state.expense);

  const [Advertisement, setAdvertisement] = useState([]);
  const [freelance, setfreelance] = useState([]);
  const [business, setbusiness] = useState([]);
  const [stockMarket, setstockMarket] = useState([]);
  // console.log('filter',Advertisement)

  useEffect(() => {
    // for all income
    const adResult = incomeAll?.filter(
      (item) => item.source === "Advertisement" && item
    );
    setAdvertisement(adResult?.map((am) => am.amount));
    const freeResult = incomeAll?.filter(
      (item) => item.source === "Freelance" && item.amount
    );
    setfreelance(freeResult?.map((am) => am.amount));
    const businessResult = incomeAll?.filter(
      (item) => item.source === "Business" && item.amount
    );
    setbusiness(businessResult?.map((am) => am.amount));
    const stockResult = incomeAll?.filter(
      (item) => item.source === "stockMarket" && item.amount
    );
    setstockMarket(stockResult?.map((am) => am.amount));

    // for all expense



  }, [incomeAll]);

  // console.log(incomeAll)
  const labels = ["Advertisement", "Freelance", "Business", "StockMarket"];

  const adTotalIncome = Advertisement?.reduce((acc, amount) => acc + amount, 0);
  const freeLanceTotalIncome = freelance?.reduce(
    (acc, amount) => acc + amount,
    0
  );
  const businessTotalIncome = business?.reduce((acc, amount) => acc + amount, 0);
  const StockMarketTotalIncome = stockMarket?.reduce(
    (acc, amount) => acc + amount,
    0
  );
  

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Overall income",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [
          adTotalIncome,
          freeLanceTotalIncome,
          businessTotalIncome,
          StockMarketTotalIncome,
        ],
      },
    ],
  };
  
  return (
    <div>
      <Line data={data} width={200} height={200}  />
    </div>
  );
};

export default LineChart;
