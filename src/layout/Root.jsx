import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Root = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>

            <main>
                {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;