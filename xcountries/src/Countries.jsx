import Card from "./Card";
import { useEffect, useState } from "react";

const Countries = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((res) => res.json())
      .then((data) => setCountryList(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {countryList.map((country) => (
        <Card key={country.abbr} flag={country.flag} name={country.name} />
      ))}
    </div>
  );
};

export default Countries;
