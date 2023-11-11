import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutProfile } from "../../redux/Action/User";
import { Link } from "react-router-dom";
import { getMyIncome } from "../../redux/Action/Income";
import { getMyExpense } from "../../redux/Action/Expense";

const IncomeAll = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state) => state.auth
  );
  const { totalIncome, incomeAll } = useSelector((state) => state.income);
  const { totalExpense,  } = useSelector((state) => state.expense);

//   console.log(totalExpense, expenseAll)
  useEffect(() => {
    dispatch(getMyIncome());
    dispatch(getMyExpense());
    // navigate("/");
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
              Total Revenue <br /> <b> Rs. {totalIncome - totalExpense }  </b>{" "}
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
            
              <Link to={"/incomeAll"}>Check Income Status</Link>
            
          </div>
          <div>
            <p>
              <Link to={"/expenseAll"}>Check Expense Status</Link>
            </p>
          </div>
        </div>
        <div className="showAllTransaction">
          {/* for Income */}
          <h1>
            <u>For Income</u>
          </h1>{" "}
          <br />
          
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Source</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {incomeAll !== undefined
                ? incomeAll.map((inc, index) => (
                    <tr key={inc._id}>
                      <td>{index + 1}</td>
                      <td>{inc.source}</td>
                      <td>Rs. {inc.amount}</td>
                      <td>{inc.createdAt}</td>
                      <td>
                        <button>Edit</button>
                      </td>
                      <td>
                        <button>Delete</button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <br /> <br />
          <br /> <br />
          
        </div>
      </div>
    </div>
  );
};

export default IncomeAll;
