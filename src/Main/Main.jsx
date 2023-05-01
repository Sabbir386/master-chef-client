import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet />
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;