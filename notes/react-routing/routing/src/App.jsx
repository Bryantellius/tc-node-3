import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home title="App Title" />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
