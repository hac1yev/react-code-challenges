import React, { useState } from "react";

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {    
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = throttle(() => {
    setScrollPosition(window.scrollY);
    console.log("Scroll position:", window.scrollY);
  }, 1000); 

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{ height: "200vh" }}>
      <h1>Scroll Position: {scrollPosition}</h1>
    </div>
  );
}

export default ScrollTracker;