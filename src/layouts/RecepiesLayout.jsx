import React from 'react';
import Header from '../pages/sharedPages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharedPages/Footer/Footer';

const RecepiesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecepiesLayout;