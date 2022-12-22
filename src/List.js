import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((member) => {
        const { id, name, image, age } = member;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
