import React, { use } from 'react';
import NavBar from '../components/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { AuthContext } from '../provider/AuthProvider';

const Root = () => {
    const { color } = use(AuthContext);
    const { state } = useNavigation();

    return (
        <div className={`${color? 'bg-white text-[#2F3A4A]' : 'text-white bg-[#2F3A4A]' }`}>
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