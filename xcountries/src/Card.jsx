const Card = ({ abbr, flag, name }) => {
  return (
    <div
      style={{
        height: 200,
        width: 200,
        border: "1px solid grey",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 8,
        margin: 5,
      }}
    >
      <img style={{ height: 100, width: 100 }} src={flag} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
