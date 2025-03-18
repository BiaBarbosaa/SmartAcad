/* Usando CSS como modulo */
//import style from './Home.module.css'

import './Home.css'
import MainHome from '../../MainHome';
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';
import React from "react";


function Home() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainHome />


                </div>
            </div>
        </ >
    );
}
export default Home;