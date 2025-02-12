import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const intervalTime = 10000;

    const interval = setInterval(() => {
      console.log(`Token expirado!!`);

      // Dispatch custom event (if needed) - consider if this is truly necessary
      const event = new CustomEvent("session-expired", {
        detail: { type: 'session-expired', message: "Sesión expirada", reloadWindow: true },
      });
      window.dispatchEvent(event);

      // Post message to ReactNativeWebView (if needed) - consider if this is truly necessary
      if (window.ReactNativeWebView) { // Check if it exists to avoid errors on web
        window.ReactNativeWebView.postMessage(JSON.stringify({
          type: "session-expired",
          message: "Sesión expirada from web",
          reloadWindow: true
        }));
      } else {
        console.warn("ReactNativeWebView is not available.  Are you running in a web browser?");
      }

    }, intervalTime); // <-- Add the interval time here

    return () => clearInterval(interval); // Clean up on unmount
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App