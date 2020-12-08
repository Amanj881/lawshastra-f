import logo from './logo.svg';
import './assets/main.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Index from './user/'
import Blog from './user/Blog'
import Header from './components/Header/Header.js'

function App() {

  const headerOptions = [
{
  label:'Home',
  value:'home'
},
{
  label:'Blogs',
  value:'blog',
},
{
  label:'Question Bank',
  value:'question-bank'
},
]

  return (
    
    <Router>
      <Header headerOptions={headerOptions}/>

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/blogs" exact component={Blog} />

      </Switch>
    </Router>
   
  );
}

export default App;
