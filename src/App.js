import logo from './logo.svg';
import './assets/main.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Index from './user/'
import Blog from './user/Blog'
import QB from './user/Question-Bank'

import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'

function App() {

  const headerOptions = [
{
  label:'Home',
  value:'home'
},
{
  label:'Blogs',
  value:'blog',
  url:'/blogs',
},
{
  label:'Question Bank',
  value:'question-bank',
   url:'/question-bank',
},
]

  return (
    
    <Router>
      <Header headerOptions={headerOptions}/>

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/blogs" exact component={Blog} />
        <Route path="/question-bank" exact component={QB} />
      </Switch>
      <Footer />
    </Router>
   
  );
}

export default App;
