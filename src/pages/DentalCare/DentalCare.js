import React from 'react';
import treatment from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className='px-12'>
            <div className="card lg:card-side bg-base-100 ">
                <figure><img src={treatment} alt="Album" /></figure>
                <div className='flex items-center'>
                    <div className="card-body ml-12 ">
                        <h1 className="card-title text-4xl">Exceptional Dental <br /> Care On  Your Terms</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam fugit cumque, dolore nemo consequatur <br /> voluptas sint quia? Non delectus dicta vitae iste excepturi qui architecto, assumenda quaerat aut a . <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non officia odio corporis ea? Facilis itaque atque blanditiis similique aspernatur fugiat magni neque possimus velit, ipsum vel quibusdam? Error, voluptatem?
                        </p>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;