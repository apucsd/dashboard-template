import DashboardStats from "./DashboardStats";
import EarningChart from "./EarningChart";

const Dashboard = () => {
  return (
    <div>
      <DashboardStats />

      <div className="grid grid-cols-12  gap-2 items-center mt-10">
        <div className="col-span-6 bg-[#F7F7F7] shadow-md  p-4 mx-2 rounded-2xl">
          {/* total services */}

          <EarningChart />
        </div>
        <div className="col-span-6 bg-[#F7F7F7] shadow-md p-4 mx-2 rounded-2xl">
          {/* total Employee */}
          <EarningChart />
        </div>
      </div>
    </div>
  );
};
// import { useRef, useEffect } from "react";

// const Dashboard = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const scrollTimeoutRef = useRef<number | null>(null);
//   const scrollSpeedRef = useRef<number>(0); // To track the scroll speed and direction

//   // Smoothly adjust the video currentTime based on scroll direction and speed
//   const smoothVideoProgress = () => {
//     if (videoRef.current && Math.abs(scrollSpeedRef.current) > 0.01) {
//       // Adjust the current time based on scroll speed
//       videoRef.current.currentTime += scrollSpeedRef.current;

//       // Gradually slow down the scroll speed for smooth deceleration
//       scrollSpeedRef.current *= 0.9; // This will decay the scroll speed gradually

//       // Continue updating until the speed is close to zero
//       requestAnimationFrame(smoothVideoProgress);
//     }
//   };

//   // Function to handle scroll direction and control video playback
//   const handleScroll = (e: WheelEvent) => {
//     const delta = e.deltaY;

//     if (videoRef.current) {
//       // Adjust the scroll speed based on deltaY (scrolling speed and direction)
//       scrollSpeedRef.current = delta * 0.01; // Multiply delta by a small factor for smoother control

//       // Start the smooth progress update
//       requestAnimationFrame(smoothVideoProgress);
//     }

//     // Clear the previous timeout and set a new one to detect when scrolling stops
//     if (scrollTimeoutRef.current) {
//       clearTimeout(scrollTimeoutRef.current);
//     }

//     scrollTimeoutRef.current = window.setTimeout(() => {
//       // Stop changing the video when scrolling stops
//       scrollSpeedRef.current = 0;
//     }, 100); // 100ms debounce to pause updates when the user stops scrolling
//   };

//   useEffect(() => {
//     // Listen to mouse scroll event
//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       // Clean up event listener on component unmount
//       window.removeEventListener("wheel", handleScroll);
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <video
//         ref={videoRef}
//         src="/magazine_full.mp4"
//         width="100%" // Make the video full width
//         height="100%" // Full height of viewport
//         controls={false} // Remove native controls
//         style={{
//           position: "fixed", // Fix the video at the top
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh", // Full height of viewport
//           objectFit: "cover", // Maintain aspect ratio
//           zIndex: 9999,
//         }}
//       />
//     </div>
//   );
// };

export default Dashboard;
