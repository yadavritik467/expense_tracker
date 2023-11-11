import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { createIncome, getMyIncome } from "../../redux/Action/Income";
import { createExpense } from "../../redux/Action/Expense";

const Header = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, message, isAuthenticated ,user} = useSelector(
    (state) => state.auth
  );

 
  // for income
  const [incomeModal, setIncomeModal] = useState(false);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

//   console.log(amount);

  // for expense
  const [expenseModal, setExpenseModal] = useState(false);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");



//   inComeHandler
const inComeHandler = async(e) =>{
    e.preventDefault();
    dispatch(createIncome(source,amount));
    dispatch(getMyIncome())
    setIncomeModal(false);

}
//   expenseHandler
const expenseHandler = async(e) =>{
    e.preventDefault();
    dispatch(createExpense(category,amount,description));
    setExpenseModal(false);

}


  return (
    <>
      <div className="header">
        <Link to={"/"}>Expense Tracker</Link>
        <Link onClick={() => setIncomeModal(true)}>Add Income</Link>
        <Link onClick={() => setExpenseModal(true)}>Add Expense</Link>
        <Link to={"/profile"}>My Profile</Link>
      </div>

      {incomeModal === true && <div className="modal">
        <form onSubmit={inComeHandler} >
        <p>
          Source : <select name="" id="" defaultValue={source} onChange={(e)=>setSource(e.target.value)}>
            <option>select the source</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Freelance">Freelance</option>
            <option value="Business">Business</option>
            <option value="stockMarket">stockMarket</option>
          </select>
        </p>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} required placeholder="Enter your amount" />
        <button type="submit">Submit</button>
        <button onClick={()=>setIncomeModal(false)}>Cancle</button>
        </form>
      </div>}
      {expenseModal === true && <div className="modal">
        <form onSubmit={expenseHandler} >
        <p>
          Source : <select name="" id="" defaultValue={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>select the source</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shoping">Shoping</option>
            <option value="Billing">Billing</option>
          </select>
        </p>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} required placeholder="Enter your amount" />
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} required placeholder="Enter your reason" />
        <button type="submit">Submit</button>
        <button onClick={()=>setExpenseModal(false)}>Cancle</button>
        </form>
      </div>}
    </>
  );
};

export default Header;
