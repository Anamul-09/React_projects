import React from "react";

function Car(props) {
  return <li className="list-group-item list-group-item-action list-group-item-secondary">I am a {props.brand} with id:  <strong>{props.id}</strong></li>;
}

export default function Grage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "Toyota" },
    { id: 3, brand: "Freary" },
  ];
  return (
    <div className="col-sm-8">
      <ul className="list-group">
        { cars.map((car) => (
          <Car id={car.id} brand={car.brand} />
        ))}
      </ul>
    </div>
  );
}
