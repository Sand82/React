import * as funFactService from "../services/FunFactsService.js";

import { useEffect, useState } from "react";
import FunFact from "./FunFact.js";

const FunFactsList = () => {
  const [funFacts, setFunFacts] = useState([]);

  useEffect(() => {
    funFactService.getAll().then((data) => setFunFacts(data));
  }, []);

  return (
    <section id="dashboard">
      {funFacts.map((funFact) => (
        <FunFact key={funFact._id} funFact={funFact} />
      ))}
    </section>
  );
};

export default FunFactsList;
