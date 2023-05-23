import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    let response = await fetch(
      "https://react-http-b8057-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    );

    const responseData = await response.json();
    const currentMeals = [];

    for (const key in responseData) {
      currentMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: Number(responseData[key].price),
      });
    }
    setMeals(currentMeals);
  };

  useEffect(() => {
    getMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
