import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-12">
                <div className="card-body">

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At alias consectetur quas aperiam nam praesentium.</p>
                </div>

                <div className='flex justify-evenly items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>California</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;