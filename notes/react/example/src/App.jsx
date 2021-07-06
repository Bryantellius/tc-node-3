import "./App.css";
import { Component } from "react";
import Header from "./page-components/Header";

class App extends Component {
  render() {
    const link = {
      text: "React Docs",
      src: "https://reactjs.org",
    };

    return (
      <div className="App">
        <main className="App-header">
          <Header link={link} />
        </main>
      </div>
    );
  }
}

export default App;
