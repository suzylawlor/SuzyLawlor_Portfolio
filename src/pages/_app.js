import "../styles/globals.css";

import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/resume") {
       import("../styles/resume.css");
     
    } 
    
  }, [router.pathname]);

  return (
  
      <Component {...pageProps} />
    
  );
}

export default MyApp;
