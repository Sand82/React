const url = "http://localhost:3030/data/facts";

export const getAll = () => {
  let funFacts = fetch(url).then((res) => res.json());
  console.log(funFacts);
  return funFacts;
};
