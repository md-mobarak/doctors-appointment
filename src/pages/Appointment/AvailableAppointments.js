import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-12'>
            <p className='text-xl text-center text-secondary'>Available Appointment on {format(date, 'PP')} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map(service => <AppointmentService key={service._id} service={service}
                    setTreatment={setTreatment}
                >
                </AppointmentService>)}
            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                date={date}
                treatment={treatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;