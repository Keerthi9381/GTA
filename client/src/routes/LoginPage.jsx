import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginPageBody from '../components/LoginPageBody';
import "../CSS/styles.css";
const LoginPage = () => {
    return ( 
        <div>
            <Header />
            <LoginPageBody />
            <Footer/>
            
        </div>
     );
}

export default LoginPage;