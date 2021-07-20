import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.amiiboapi.com/api/character")
      .then((data) => data.json())
      .then((data) => setCharacters(data.amiibo))
      .catch((err) => console.error(err));
  }, [characters]);

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => {
          return <li key={character.key}>{character.name}</li>;
        })}
      </ul>
      <p>
        This page is tells you about our services and how you can get started.
      </p>
      <p>Checkout our home page or learn about our team</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Services;
