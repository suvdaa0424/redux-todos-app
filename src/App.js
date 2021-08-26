import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
