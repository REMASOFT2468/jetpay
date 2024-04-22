import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Header from "./pages/header";
import Body from "./pages/body";
import End from "./pages/End";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <h1>me</h1> */}
      <Home />
      <Body />
      <End />
    </div>
  );
}

export default App;
