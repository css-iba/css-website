import React from 'react';
import DisplayLottie from '../Lottie/DisplayLottie';
import Background from '../../public/Codex/TitleBG.json';

const BackgroundAnimation: React.FC = () => {
    return (
        <div className='flex justify-center items-center bg-transparent'> 
            <DisplayLottie animationData={Background} />
        </div>
    );
}

export default BackgroundAnimation;