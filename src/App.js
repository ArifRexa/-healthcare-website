import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Homes/Home/Home';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Consultant from './Pages/Consultants/Consultant';
import ConsaltantDetails from './Pages/Consultants/ConsaltantDetails';
import AuthProvider from './Pages/Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Common/Footer/Footer';
import ServicesDetails from './Pages/Services/ServicesDetails';

function App() {
  return (
    <div>

      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="/consultant">
              <Consultant></Consultant>
            </Route>

            <PrivateRoute path="/doc/:docId">
              <ConsaltantDetails></ConsaltantDetails>
            </PrivateRoute>

            <PrivateRoute path="/service/:serviceId">
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>

            <Route exact path="*">
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
