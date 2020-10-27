import React,{useEffect} from 'react';
import ReactGA from 'react-ga';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {PageView, initGA} from './components/tracking/index';
import Contents from './components/contents';


function initializeAnalytics(){
  ReactGA.initialize('G-10B42YK8VP');
  ReactGA.pageview()
}

function  App () {

 
useEffect(()=>{
      ReactGA.initialize('G-BZH77WJDCS')

      ReactGA.pageview('/')
    },[])

  
  return (
    <div className="App">
      <Contents />
    </div>
  );
  
}


export default App;
