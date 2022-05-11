import React from 'react';
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import fluoride from '../../assets/images/fluoride.png'
import DentalCare from '../DentalCare/DentalCare';

const Service = () => {
    return (
        <div className=' px-12 my-28'>
            <div>
                <p className='text-center text-primary font-bold text-xl'>OUR SERVICES</p>
                <h3 className='text-center text-accent text-3xl mt-4'>Service We Provide</h3>
            </div>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 my-12'>
                <div class="card w-96 bg-base-100 ">
                    <figure class="px-10 pt-10">
                        <img src={cavity} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">fluoride Treatment</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur, quod rerum eius, ducimus repellat ipsum, blanditiis itaque possimus nisi quis laboriosam aliquam deserunt molestiae? Quaerat, debitis. Rem, ea eligendi.</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100">
                    <figure class="px-10 pt-10">
                        <img src={whitening} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cavity Filling</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores et voluptatum nesciunt suscipit hic repellat itaque vitae! Nostrum dolorem tenetur fugit. Tenetur dicta unde consequatur quae aliquid! Minus, aliquam?</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 ">
                    <figure class="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Teeth Whiting</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae saepe praesentium reiciendis exercitationem! Mollitia, cupiditate molestias. Excepturi nulla expedita molestias praesentium, est earum, alias quisquam porro, debitis impedit necessitatibus?</p>

                    </div>
                </div>
            </div>
            <div className='my-28'>
                <DentalCare></DentalCare>
            </div>
        </div>
    );
};

export default Service;