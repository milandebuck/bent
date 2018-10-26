import { BentComponent } from "./../bent/Component";
export class ExampleComponent extends BentComponent {
  constructor() {
    super();
    this.name = "example-component";
    this.template = `<div><h1>Timer: <span>{{timer}}</span></h1><input type="number" b-bind="timer"><p>testtekst {{someVal}} bla</p></div><p>{{timer}}</p>`;

    bindData({
      timer: 0,
      someValue: 1,
      someExample: 2
    });
  }
}
