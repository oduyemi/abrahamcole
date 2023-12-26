import "./App.css";
import { Navigation } from "./navigation";


function App() {
  const isLandingPage = window.location.pathname === "/";
  return (
    <div className="App">
      <Navigation isLandingPage={isLandingPage} />
    </div>
  );
}

export default App;
