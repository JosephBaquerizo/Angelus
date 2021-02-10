import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import Inicio from "./components/Inicio";
import QuienesSomos from "./components/QuienesSomos";
import Visitanos from "./components/Visitanos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="mainContainer">
        <TopBar/>
        <Switch>
          <Route path="/" exact component={Inicio}/>
          <Route path="/quienessomos" component={QuienesSomos}/>
          <Route path="/visitanos" component={Visitanos}/>
          <Route path="/contacto" component={Contacto}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
