import React, { Component,useEffect,useState } from 'react';
import Footer from "../components/Footer";
import HeaderForDashboards from '../components/HeaderForDashboards';
import axiosFetch from './../axios/axios';
const TraineeHomePage = () => {
    const [tasks, setTasks] = useState([]);



    // first data grab
      useEffect(() => {
        axiosFetch.post("/task/gettask")
          .then(resp => resp.json())
          .then(data => setTasks(data)) // set data to state
      }, []);
      console.log(tasks)
    return ( 
        <>
        <HeaderForDashboards></HeaderForDashboards>
        <div align="center">
            TraineeHomePage
        </div>

        {/* <div>

        <table className={classes.usersTable}>

        <tbody>

            <div>


            <th>Task Id</th>

            <th>Task Heading</th>

            <th>Task Description</th>

            <th>Mentor Name</th>

            <th>Posted On</th>


        {data!==null && data.map(({ court_id,coach_id,court_name }) => {

              return (

                <tr key={court_id}>

                  <td>{court_id}</td>

                  <td>{coach_id}</td>

                  <td>{court_name}</td>

                  <td className={classes.operation}></td> */}
 
        <Footer></Footer>
        </>
     );
}

export default TraineeHomePage;