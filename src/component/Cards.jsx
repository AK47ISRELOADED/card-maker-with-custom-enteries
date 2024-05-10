import React from "react";
import Card from "./Card";

const Cards = ({ users, removeHandler }) => {
  return (
    <div className="h-96 max-h-96  overflow-auto p-4 w-full  bg-sky-100 justify-center flex-wrap flex items-center gap-10">
      {users.map((item, index) => {
        return (
          <Card
        
            key={index}
            id={index}
            removeHandler={removeHandler}
            user={item}
          />
        );
      })}
    </div>
  );
};

export default Cards;
