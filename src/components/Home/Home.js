import React from 'react';
import HeaderPrueba from '../commons/Header';
import Principal from '../principal/Principal';
import Footer from '../commons/Footer';

import '../../assets/css/style.css';

const Home = () => {
    return (

        <div className='home-container'>
            <div className='header-content'>
                <HeaderPrueba />
            </div>
            <div className='imagen-principal-content'>
                <Principal />
            </div>

            <div className='footer-content'>
                <Footer />
            </div>
        </div>

    )

};

export default Home;