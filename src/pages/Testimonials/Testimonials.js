import React from 'react';
import cort from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from '../Review/Review';

const Testimonials = () => {
    const reviws = [
        {
            img: people1,
            _id: 1,
            name: 'jhon herry',
            descriptions: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis itaque doloribus veniam dolores esse libero necessitatibus quidem quam ad, cum laudantium in soluta laborum deserunt odio repudiandae saepe voluptatem.'
        },
        {
            img: people2,
            _id: 2,
            name: 'jhon herry',
            descriptions: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis itaque doloribus veniam dolores esse libero necessitatibus quidem quam ad, cum laudantium in soluta laborum deserunt odio repudiandae saepe voluptatem.'
        },
        {
            img: people3,
            _id: 3,
            name: 'jhon herry',
            descriptions: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis itaque doloribus veniam dolores esse libero necessitatibus quidem quam ad, cum laudantium in soluta laborum deserunt odio repudiandae saepe voluptatem.'
        },
    ]
    return (
        <section className='mt-28'>
            <div className="flex justify-between">
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl '>What Our Patients Say</h2>

                </div>
                <div>
                    <img className='lg:w-48 w-24' src={cort} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-4">
                {
                    reviws.map(review => <Review review={review} key={review._id}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;