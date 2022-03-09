import React from "react";
import "./card.styles.css";

function Card(props) {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container">
      <img
        alt={`monster number ${id}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1> {name}</h1>
      <p> {email}</p>
    </div>
  );
}

export default Card;
