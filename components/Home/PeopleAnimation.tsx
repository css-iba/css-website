import React from 'react';
import DisplayLottie from '../Lottie/DisplayLottie';
import People from '../../public/Home/People.json';

const PeopleAnimation: React.FC = () => {
    return (
        <div className='flex justify-center items-center bg-transparent'> 
            <DisplayLottie animationData={People} />
        </div>
    );
}

export default PeopleAnimation;