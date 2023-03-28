import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header"
import MyRouter from "./Routes/MyRouter"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div>
          <Router>
            <Header/>
            <MyRouter/>
            <Footer/>
          </Router>

    </div>
  )
}

export default App;
