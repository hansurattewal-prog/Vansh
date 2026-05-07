import { useEffect } from 'react';

const ChatbaseBot = () => {
  useEffect(() => {
    // Chatbase Integration Script
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase.q = [];
    }

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "rrhGsFkmsKx1HSzMC4JBv";
    script.domain = "www.chatbase.co";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up if component unmounts (optional, but good practice if it's dynamic)
      const existingScript = document.getElementById("rrhGsFkmsKx1HSzMC4JBv");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
};

// TS Declaration for window
declare global {
  interface Window {
    chatbase?: any;
  }
}

export default ChatbaseBot;
