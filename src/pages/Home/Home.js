import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <div className='px-12'>
                <MakeAppointment></MakeAppointment>
            </div>
            <div className='px-12'>
                <Testimonials></Testimonials>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;