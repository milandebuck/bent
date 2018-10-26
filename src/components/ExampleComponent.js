import { BentComponent } from "./../bent/Component";
export class ExampleComponent extends BentComponent {
  constructor() {
    super();
    this.template = `<div><h1>Timer: <span>{{timer}}</span></h1><input type="number" b-bind="timer"><p>testtekst {{someVal}} bla</p></div><p>{{timer}}</p>`;
  }
  data() {
    return {
      timer: 0,
      someVal: 1
    };
  }

  onInit() {
    setInterval(() => {
      this.getState().timer += 1;
    }, 1000);
  }
}
