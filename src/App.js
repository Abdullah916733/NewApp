
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  
   state = {
     progress : 0,
   }

    setProgress = (inProgress) => {
       
        this.setState({progress : inProgress})
    }

  render() {
    
    return (
      <div>

      <Router>
      
      <Navbar />

      <LoadingBar
       height='3px'
        color='#f11946'
        progress={this.state.progress}
       
      />

         <Routes>

       < Route  key='' path="/"  element = {<News setProgress={this.setProgress} key='general' pageSize={6}  country ='in'  category = 'general' />} />
 
       < Route path="/business"  element = {<News setProgress={this.setProgress}key='business' pageSize={6}  country ='in'  category = 'business' />} />
 
       < Route path="/entertainment"  element = {<News setProgress={this.setProgress}key='entertainment' pageSize={6}  country ='in'  category = 'entertainment' />} />
 
       < Route path="/general"  element = {<News setProgress={this.setProgress}key='general' pageSize={6}  country ='in'  category = 'general' />} />

       < Route path="/health"  element = {<News setProgress={this.setProgress}key='health' pageSize={6}  country ='in'  category = 'health' />} />

       < Route path="/science"  element = {<News setProgress={this.setProgress}key='science' pageSize={6}  country ='in'  category = 'science' />} />

       < Route path="/sports"  element = {<News setProgress={this.setProgress}key='sports' pageSize={6}  country ='in'  category = 'sports' />} />
 
       < Route path="/technology"  element = {<News setProgress={this.setProgress}key='technology' pageSize={6}  country ='in'  category = 'technology' />} />
 
 
       </Routes>
         
       </Router>

      </div>
    )
  }
}
