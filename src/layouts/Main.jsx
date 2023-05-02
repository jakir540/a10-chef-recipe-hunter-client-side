import React from 'react';
import Header from '../pages/sharedPages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharedPages/Footer/Footer';
import SubscribeSection from '../pages/Home/SubscribeSection/SubscribeSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <SubscribeSection></SubscribeSection>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;