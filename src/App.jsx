import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      
        console.log(`Token expirado!!`)
        const event = new CustomEvent("session-expired", {
          detail: { type: 'session-expired', message: "Sesión expirada", reloadWindow: true },
        });
        window.dispatchEvent(event);
    
        window.ReactNativeWebView.postMessage(JSON.stringify({
          type: "session-expired",
          message: "Sesión expirada from web",
          reloadWindow: true
        }));
      })

    return () => clearInterval(interval);
  }, []);

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