import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
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
