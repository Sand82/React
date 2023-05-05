const ExspenseDate = ({ date }) => {
  const mounth = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div>
      <div>{mounth}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExspenseDate;
