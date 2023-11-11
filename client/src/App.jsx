import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  // useNavigate,
} from "react-router-dom";
import "./App.css";
import SignIn from "./component/Auth/SignIn";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/Action/User";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import IncomeAll from "./component/Home/IncomeAll";
import ExpenseAll from "./component/Home/Expense";

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
    // navigate("/");
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      console.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);
  return (
    <div className="App">
      <Router>
        {user !== null && <Header />}
        <Routes>
          <Route path="/" element={user !== null ? <Home /> : <SignIn />} />
          <Route
            path="/incomeAll"
            element={user !== null ? <IncomeAll /> : <SignIn />}
          />
          <Route
            path="/expenseAll"
            element={user !== null ? <ExpenseAll /> : <SignIn />}
          />
        </Routes>
      {/* <Link to={"/incomeAll"} >income</Link> */}
      </Router>


    </div>
  );
}

export default App;
