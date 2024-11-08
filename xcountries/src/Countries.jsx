import Card from "./Card";

const Countries = () => {
  const countryList = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {countryList.map((country) => (
        <Card />
      ))}
    </div>
  );
};

export default Countries;
