import React from "react";
import "../App.css";
const List = ({ people }) => {
  return (
    <>
      <div className="list-container">
        {people.map((peoples) => {
          const { id, name, age, image } = people;
          return (
            <>
              <div className="people-container" key={id}>
                <img src={peoples.image} alt={peoples.name} />
                <div className="name">
                  <h4>{peoples.name}</h4>
                  <h6>{peoples.age} years</h6>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default List;
