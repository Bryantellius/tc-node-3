import { Link } from "react-router-dom";

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <p>This page is warm, has insightful content about our team.</p>
      <p>Checkout our home page and our services</p>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
    </div>
  );
}

export default About;
