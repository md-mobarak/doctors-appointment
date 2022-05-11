import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <div className='px-12'>
                <MakeAppointment></MakeAppointment>
            </div>
        </div>
    );
};

export default Home;