import Lottie from "lottie-react";
import RegistrationAnimation from "@/public/lottie-animation/RegistrationAnimation.json"

interface props{
    width?:number,
    height?:number,
}

export default function RegistrationLottieAnimation({width=164, height=164}:props) {
  return (
    <div className="flex flex-1 justify-center items-center overflow-hidden">
      <Lottie animationData={RegistrationAnimation} loop={true} style={{width:width, height:height}} />
    </div>
  );
}