import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        This page is cool, has helpful content, and hooks you to spending more
        time on my web app.
      </p>
      <p>Learn more about us and our services</p>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </div>
  );
}

export default Home;
