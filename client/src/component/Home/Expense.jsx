import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutProfile } from "../../redux/Action/User";
import { Link } from "react-router-dom";
import { getMyIncome } from "../../redux/Action/Income";
import { getMyExpense } from "../../redux/Action/Expense";

const ExpenseAll = () => {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  const { totalIncome } = useSelector((state) => state.income);
  const { totalExpense, expenseAll } = useSelector((state) => state.expense);

  // console.log(totalExpense, expenseAll)
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
        <div className="showAllTransaction">
          
          <br /> <br />
          <br /> <br />
          {/* For expense */}
          <h1>
            <u>For Expense</u>
          </h1>{" "}
          <br />
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {expenseAll !== undefined
                ? expenseAll.map((exp, index) => (
                    <tr key={exp._id}>
                      <td>{index + 1}</td>
                      <td>{exp.category}</td>
                      <td>{exp.description}</td>
                      <td>Rs. {exp.amount}</td>
                      <td>{exp.updatedAt}</td>
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

export default ExpenseAll;
