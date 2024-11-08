const Card = () => {
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
      }}
    >
      <img src={``} alt="Image" />
      <h3>Country</h3>
    </div>
  );
};

export default Card;
