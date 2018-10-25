function ExampleController() {
  (this.timer = 0), (this.someVal = 2), (this.exampleVal = "succes");
}

function HomeController() {
  (this.someVal = 6), (this.exampleVal = "Home");
}

function RandomController() {
  (this.someVal = 10), (this.exampleVal = "Random");
}

export { ExampleController, HomeController, RandomController };
