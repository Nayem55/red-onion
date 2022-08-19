import { Route, Routes, useLocation } from "react-router-dom";
import Breakfast from "./Components/Breakfast/Breakfast";
import Dinner from "./Components/Dinner/Dinner";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Lunch from "./Components/Lunch/Lunch";
import Signup from "./Components/Signup/Signup";

function App() {
  const location = useLocation();
  
  return (
    <div>
      <Header></Header>
      {
        location.pathname==="/signup"?<Signup></Signup> : <Home></Home>
      }
      <Routes>
        <Route path="/" element={<Breakfast></Breakfast>}></Route>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        <Route
          path="/breakfast/:foodID"
          element={<FoodDetails></FoodDetails>}
        ></Route>
        <Route
          path="/lunch/:foodID"
          element={<FoodDetails></FoodDetails>}
        ></Route>
        <Route
          path="/dinner/:foodID"
          element={<FoodDetails></FoodDetails>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
