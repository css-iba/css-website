import React from 'react';
import Lottie from 'lottie-react';

interface DisplayLottieProps {
  animationData: object;
}

const DisplayLottie = ({ animationData }: DisplayLottieProps) => {
  return (
    <div>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}

export default DisplayLottie;