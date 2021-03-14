import logo from "./logo.svg";
import "./App.css";
import { ContentsQueueProvider } from "./contexts/OutsideContentsQueueContext";
import { ToastRegister } from "./components/ToastRegister";

function App() {
  return (
    <ContentsQueueProvider>
      <div className="App">
        <div className="App-container">
          <img src={logo} className="App-logo" alt="logo" />
          <ToastRegister />
        </div>
      </div>
    </ContentsQueueProvider>
  );
}

export default App;
