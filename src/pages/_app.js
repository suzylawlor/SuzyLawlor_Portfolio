import "../styles/globals.css";
import { ContextProvider } from "/context/chatIndex";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
     if (router.pathname === "/Keyboard") {
      import("../styles/keyboard.css");
    } else if (router.pathname === "/resume") {
      import("../styles/resume.css");
    } else if (router.pathname === "/To-do/todoPage") {
      import("../styles/todo.css");
    }
    
    
  }, [router.pathname]);

  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
