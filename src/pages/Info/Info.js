import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 px-12 mb-10'>
            <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl p-4">
                <figure><img src={clock} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Opening Hours</h2>
                    <p className='text-white'>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
            <div className="card lg:card-side bg-accent shadow-xl p-4">
                <figure><img src={marker} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Visit Our Location</h2>
                    <p className='text-white'>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
            <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl p-4">
                <figure><img src={phone} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Contact Us Now</h2>
                    <p className='text-white'>+9343495394583</p>

                </div>
            </div>

        </div>
    );
};

export default Info;