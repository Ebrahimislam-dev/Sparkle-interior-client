import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Home from './Pages/HomePage/Home/Home';
import NotFound from './Pages/SubPages/notfound/NotFound';
import Footer from './Pages/SubPages/footer/Footer';
import Login from './Pages/loginpage/login/Login';
import Register from './Pages/loginpage/Register/Register';
import About from './Pages/SubPages/About/About';
import Contactus from './Pages/SubPages/contact/Contactus';
import Booking from './Pages/HomePage/Booking/Booking';
import PrivateRoute from './Pages/loginpage/privateRout/PrivateRoute';
import DashBoard from './Pages/DashBoardPage/DashBoard/DashBoard';
import ExploreAllProduct from './Pages/HomePage/ProductPage/ExploreAllProduct';
import Faqs from './Pages/SubPages/FAQS/Faqs';
import AdminRoute from './Pages/loginpage/AdminRoute/AdminRoute';
import AddProducts from './Pages/DashBoardPage/AdminPage/AddProduct/AddProducts';

function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/exploreProducts">
              <ExploreAllProduct />
            </Route> 
          
          
            <Route path="/faqs">
            <Faqs></Faqs>
          </Route>
          
        
             <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute> 
           <AdminRoute path="/addproduct">
              <AddProducts></AddProducts>
            </AdminRoute>  

            <PrivateRoute path="/booking/:productId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/contact">
              <Contactus></Contactus>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>  

          </Switch>
           <Footer></Footer> 
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
