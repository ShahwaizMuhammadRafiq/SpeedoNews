import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import  { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

import React from 'react'
import News from './components/News';

const App = ()=> {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);  
  


    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#00FFFF'
        height={3}
        progress={progress}
      />
        <Routes>
                <Route exact path="/" element={<News   setProgress={setProgress}  apikey={apikey}  key="general" titlehead="SpeedoNews- Main Headlines" pageSize={6} country="us" category='world'/>}/>
               <Route exact path="/general" element={<News  setProgress={setProgress}  apikey={apikey}  key="world" titlehead="SpeedoNews- Main Headlines" pageSize={6} country="us" category='world'/>}/>
               <Route exact path="/business" element={<News  setProgress={setProgress} apikey={apikey} key="business" titlehead="SpeedoNews- Business Headlines" pageSize={6} country="us" category='business'/>}/>
               <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="entertainment" titlehead="SpeedoNews- Entertainment Headlines" pageSize={6} country="us" category='entertainment'/>}/>
               <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey}  key="health" pageSize={6} titlehead="SpeedoNews- Health Headlines" country="us" category='health'/>}/>
               <Route exact path="/science" element={<News  setProgress={setProgress} apikey={apikey}  key="science" pageSize={6} titlehead="SpeedoNews- Science Headlines" country="us" category='science'/>}/>
               <Route exact path="/sports" element={<News setProgress={setProgress}  apikey={apikey} key="sports" pageSize={6} titlehead="SpeedoNews- Sports Headlines" country="us" category='sports'/>}/>
               <Route exact path="/technology" element={<News setProgress={setProgress}  apikey={apikey} key="technology" pageSize={6} titlehead="SpeedoNews- Tech Headlines" country="us" category='technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }


export default App;