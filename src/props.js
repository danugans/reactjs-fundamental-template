import React from "react";

//Import Components
import List from "./components/list";

const nameCar = "Honda";
const colorCar = "Pink";

function Props() {
  return (
    // Code Inside div
    <div>
      <p>On the image element using default props, namely src</p>
      <img src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E="></img>

      <List listData={nameCar} color={colorCar} />
      <List listData="BMW" />
    </div>
  );
}

export default Props;
