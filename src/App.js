import React from 'react';
import './App.css';
import NavBar from './compoments/MainCompoments/NavBar';
import { CardComponent } from './compoments/MainCompoments/Card';
import Footer from './compoments/MainCompoments/Footer';
import Header from './compoments/MainCompoments/Header';
import userReducer from './Reducers/UserReducer';
import cookie from "react-cookies";
import { userContext } from './MyContex';
import { useReducer } from 'react';


function App() {

  const [user, dispatch] = useReducer(userReducer, cookie.load('current-user') || null);


  return (
    <>
      <userContext.Provider value={[user, dispatch]}>
        <NavBar />
        <Header />
        <CardComponent />
        <Footer />
      </userContext.Provider>
      
    </>
  );
}

export default App;
