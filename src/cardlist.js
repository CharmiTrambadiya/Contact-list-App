import React from "react";
import Card from "./card";

const CardList = (props) => {
  const {filteredData} = props;
  return(
    <div>
      {
        filteredData.map((user, index) => {
          return(
          <Card
              key={index}
              id={filteredData[index].id}
              name={filteredData[index].name}
              email={filteredData[index].email} />
          );
        })
      }
    </div>
  );
}
export default CardList;