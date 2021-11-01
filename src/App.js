import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import TinderCards from './TinderCards/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat" ></Route>
          <Route path="/" ><TinderCards /></Route>
        </Switch>
      </Router>
      {/* Tinder Cards */}
      {/* Buttons below Tinder cards */}
      {/* Chat Screen */}
    </div>
  );
}

export default App;
