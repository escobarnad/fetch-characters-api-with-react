import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCharacter = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weapon, setWeapon] = useState("");
  const [debt, setDebt] = useState(false);

  const API_URL = "http://localhost:5005/api/characters/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name,
      occupation,
      weapon,
      debt,
    };

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 201) {
        const parsed = await response.json();
        setTimeout(() => {
          setName("");
          setOccupation("");
          setWeapon("");
          setDebt("");
        }, 250);
        navigate(`/characters/${parsed.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add a new character</button>
    </form>
  );
};

export default CreateCharacter;
