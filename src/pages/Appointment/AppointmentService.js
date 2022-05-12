import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots, } = service
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? <span>{slots[0]}</span> :
                        <span className='text-red-500'>
                            Try Another Date
                        </span>}

                    </p>
                    <p>{slots.length} Space Available</p>
                    <div class="card-actions justify-center">
                        {/* {
                            !slots.length > 0 ?
                                <button disabled class="btn btn-primary w-50">Book Appointment</button> :
                                <button onClick={() => setTreatment(service)} className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'>Book Appointment</button>

                        } */}
                        <label for="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;