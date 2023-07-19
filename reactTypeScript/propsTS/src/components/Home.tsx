import React from "react";
import { TakenData } from "./proptypes";

function Home(props: TakenData) {
  return (
    <div>
      <h5>Hoşgeldiniz, {props.name}</h5>
      <span>
        {props.courseNumber === 0
          ? "Mevcut kursunuz bulunmamaktadır."
          : `Güncel olarak ${props.courseNumber} adet kursunuz var.`}
      </span>
    </div>
  );
}

export default Home;
