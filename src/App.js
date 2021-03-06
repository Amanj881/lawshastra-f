import React,{useState} from 'react'
import logo from './logo.svg';
import './assets/main.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Index from './user/'
import Blog from './user/Blog'
import QB from './user/Question-Bank'
import Login from './admin/login'
import Dashboard from './admin/dashboard'
import Blogs from './admin/blog'
import Opportunities from './admin/opportunity'
import Material from './admin/study-material'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import SideNav from './admin/sideNav'
import Nav from './components/Navbar/nav'
import AddBlog from './admin/addBlog'
import AddOpportunity from './admin/addOpportunity'

function App() {
  const [authUser, setAuthUser] = useState(true)

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
{
  label:'Admin Dashboard ',
  value:'dashboard',
   url:'/dashboard',
},

]

 const dropOptions = [
{
  label:'Study Material',
  value:'study-material',
   url:'/study-material',
   type:'drop-down',
   subOption:
    [
    {
    name:'Notes',
    value:'notes',
    },
    {
    name:'CaseAnalysis',
    value:'case-analysis',
  },
    ],
},
{
  label:'Opportunities',
  value:'opportunities',
   url:'/opportunities',
   type:'drop-down'
},

]

  return (
   <>
      {authUser ? (<Router>
      
              <Nav />
              <div className="w-full flex">
              <div className="w-1/5 ">
              <SideNav />
              </div>
              <div className="w-4/5 ">
              <Switch>
                  <Route path='/dashboard' exact component={Dashboard} />
               <Route path='/blogs' exact component={Blogs} />
              <Route path='/study-material' exact component={Material} />
              <Route path='/opportunities' exact component={Opportunities} />
              <Route path='/addBlog' exact component={AddBlog} />
              <Route path='/addOpportunity' exact component={AddOpportunity} />

              </Switch>
              </div>
              </div>
                </Router>)

      :<Router>
      <Header headerOptions={headerOptions} dropOptions={dropOptions}/>

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/blogs" exact component={Blog} />
        <Route path="/question-bank" exact component={QB} />
      </Switch>
      <Footer />
    </Router>}
    
    </>
  );
}

export default App;
