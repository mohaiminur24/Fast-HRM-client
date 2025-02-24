"use client"
import LoginLottieAnimation from "@/components/modules/login-registration/login-lottie-animation";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  

  if(true) return route.push("/auth");

  return (
    <div>
      <h1>Next js project</h1>
      <LoginLottieAnimation/>
    </div>
  );
}
