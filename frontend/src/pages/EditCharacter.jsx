import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCharacter = () => {
  const navigate = useNavigate();
  const { characterId } = useParams();

  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weapon, setWeapon] = useState("");
  const [debt, setDebt] = useState(false);

  const API_URL = "http://localhost:5005/api/characters/";

  const fetchCharacter = async () => {
    try {
      const responseFromBackend = await fetch(
        `${import.meta.env.VITE_API_URL}/characters/${characterId}`
      );
      if (responseFromBackend.ok) {
        const parsedFromBackend = await responseFromBackend.json();
        console.log(parsedFromBackend);
        setName(parsedFromBackend.character.name);
        setOccupation(parsedFromBackend.character.occupation);
        setWeapon(parsedFromBackend.character.weapon);
        setDebt(parsedFromBackend.character.debt);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const payload = {
      name,
      occupation,
      weapon,
      debt,
    };

    try {
      const response = await fetch(`${API_URL}${characterId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        const parsed = await response.json();
        try {
          navigate(`/characters/${parsed.id}`);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleUpdate}>
      <label>
        Name
        <input
          value={name}
          type="text"
          name="name"
          onChange={(event) => {
            console.log(event);
            setName(event.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Occupation
        <input
          value={occupation}
          type="text"
          name="occupation"
          onChange={(event) => {
            console.log(event);
            setOccupation(event.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Weapon
        <input
          value={weapon}
          name="weapon"
          type="text"
          onChange={(event) => setWeapon(event.target.value)}
        />
      </label>
      <br />
      <label>
        Debt
        <input
          checked={debt}
          name="debt"
          type="checkbox"
          onChange={(event) => setDebt(event.target.checked)}
        />
      </label>
      <br />
      <button type="submit">Update character</button>
    </form>
  );
};

export default EditCharacter;
