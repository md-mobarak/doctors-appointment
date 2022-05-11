import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className=' flex justify-center items-center rounded-xl'
            style={{
                background: `url(${appointment})`
            }}>
            <div className=" flex-1 hidden lg:block">
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className=" flex-1 p-8">
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make And Appointment  Today</h2>
                <p className='text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam, asperiores laudantium iusto molestiae omnis maxime facilis optio ab deserunt explicabo repudiandae odit magnam, harum vitae, delectus quos? Laudantium nulla explicabo beatae veritatis fugit, odio vero porro in temporibus iusto?</p>
                <div>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;