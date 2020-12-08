import logo from './logo.svg';
import './assets/main.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Index from './user/'
import Motion from './components/Motion/Motion';
function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
   
  );
}

export default App;
