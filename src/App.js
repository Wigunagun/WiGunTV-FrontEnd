import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Pages
import Landing from './pages/Landing'

// Components
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Landing} />
      </Router>
    </div>
  );
}

export default App;
