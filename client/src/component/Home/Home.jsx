import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutProfile } from "../../redux/Action/User";
import { Link } from "react-router-dom";
import { getMyIncome } from "../../redux/Action/Income";
import { getMyExpense } from "../../redux/Action/Expense";
import { Pie } from "react-chartjs-2";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { totalIncome, incomeAll } = useSelector((state) => state.income);
    const { totalExpense, expenseAll } = useSelector((state) => state.expense);
 

  useEffect(() => {
    dispatch(getMyIncome());
    dispatch(getMyExpense());
  }, [dispatch]);

  const logOutHandler = async () => {
    dispatch(logoutProfile());
  };
  return (
    <div className="home">
      <div className="home_1">
        welcome
        <b>
          {" "}
          <i>{user.name}</i>{" "}
        </b>
        <br />
        <button onClick={logOutHandler}>Logout</button>
      </div>
      <div className="home_2">
        <div className="home_2_container">
          <div>
            <p>
              Total Revenue <br /> <b> Rs. {totalIncome - totalExpense} </b>{" "}
            </p>
          </div>
          <div>
            <p>
              Total Income <br /> <b> Rs. {totalIncome} </b>{" "}
            </p>
          </div>
          <div>
            <p>
              Total Expense <br /> <b> Rs. {totalExpense} </b>{" "}
            </p>
          </div>
          <div>
            <p>
              <Link to={"/incomeAll"}>Check Income Status</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to={"/expenseAll"}>Check Expense Status</Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="w-[400px] h-fit">
            <PieChart/>
          </div>
          <div className="w-[500px] h-fit">
          <LineChart />
          </div>
          <div className="w-[500px] h-fit">
          <LineChart />
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Home;
