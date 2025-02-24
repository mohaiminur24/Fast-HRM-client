import Lottie from "lottie-react";
import LoginAnimation from "@/public/lottie-animation/LoginAnimation.json"

interface props{
    width?:number,
    height?:number,
}

export default function LoginLottieAnimation({width=164, height=164}:props) {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <Lottie animationData={LoginAnimation} loop={true} style={{width:width, height:height}} />
    </div>
  );
}
