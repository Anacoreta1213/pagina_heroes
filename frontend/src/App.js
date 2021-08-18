import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Home from './components/home/Home';
import AllHeroes from './components/heroes/AllHeroes';
import OneHeroe from './components/heroe/OneHeroe';
import About from './components/about/About';
import ResultSearch from './components/resultSeach/ResultSearch';

function App() {
  return (
      <Router>
        <NavBar/>
          <div className="container">
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/heroes" component={AllHeroes}/>
        <Route path="/about" component={About}/>
        <Route path="/heroe/:id" component={OneHeroe}/>
        <Route path="/result/:nombre" component={ResultSearch}/>
        </Switch>
        </div>
      </Router>

  );
}

export default App;
