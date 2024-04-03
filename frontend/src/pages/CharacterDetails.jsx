import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { characterId } = useParams();

  const [character, setCharacter] = useState();

  const fetchCharacter = async () => {
    try {
      const responseFromBackend = await fetch(
        `${import.meta.env.VITE_API_URL}/characters/${characterId}`
      );
      if (responseFromBackend.ok) {
        const parsedFromBackend = await responseFromBackend.json();
        console.log(parsedFromBackend);
        setCharacter(parsedFromBackend.character);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return character ? (
    <>
      <h2>Details of {character.name}</h2>
      <h3>Occupation: {character.occupation}</h3>
      <p>Weapon: {character.weapon}</p>
      <Link to={`/characters/${character.id}/update`}>
        <button type="button">Update</button>
      </Link>
      <Link>
        <button type="button">Delete</button>
      </Link>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default CharacterDetails;
