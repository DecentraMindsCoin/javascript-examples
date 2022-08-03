const newFunc = () => {
  var cars = ["toyota", "ford", "chevy", "mercedez", "kia"];

  if (cars.includes("toyota")) {
    console.log("Toyota is here");
  } else if (!cars.includes("toyota")) {
    console.log("No Toyotas here");

    if (cars.includes("ford")) {
      console.log("Also includes ford");
    } else if (!cars.includes("")) {
      console.log("No Fords here");
    }
  } else {
    console.log("No toyotas or fords here");
  }
};
newFunc();
