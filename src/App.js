import React from 'react';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
/*Importing Components*/
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
//context
import UserProvider from './context';
//import router
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
   <Router>
     <UserProvider>
     <Header />
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/:movieId" element={<Movie/>} />
       <Route path="/*" element={<NotFound/>}/>
       </Routes>  
     <GlobalStyles />
     </UserProvider>
    </Router>
  );
}

export default App;
