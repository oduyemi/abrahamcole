import "./style.scss";
import './App.css';
import { Navigation } from "./navigation";
import { Banner } from "./components/Banner";
import { Axios } from "axios";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />

    </div>
  );
}

export default App;
