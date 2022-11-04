import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminSignupPageBody from '../components/AdminSignupPageBody';

const AdminSignupPage = () => {
    return (
      <div>
            <Header />
            <AdminSignupPageBody/>
            
        <Footer />
      </div>
    );
}
 
export default AdminSignupPage;