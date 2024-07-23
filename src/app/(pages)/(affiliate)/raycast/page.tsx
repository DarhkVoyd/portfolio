"use client";
import { useEffect } from "react";

const RaycastRedirect = () => {
  useEffect(() => {
    window.location.href = "https://raycast.com/?via=darhkvoyd";
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1>Redirecting...</h1>
      <p>
        If you are not redirected,{" "}
        <a href="https://raycast.com/?via=darhkvoyd">click here</a>.
      </p>
    </div>
  );
};

export default RaycastRedirect;
