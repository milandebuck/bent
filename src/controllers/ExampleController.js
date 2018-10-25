import { BentComponent } from "./bent"
class ExampleController extends BentComponent{
    this.name = "example-controller";
    constructor(){
        
        super()
        bindData({
            timer:0
            someValue:1,
            someExample:2
        })
    }

    this.template = `<div><h1>Timer: <span>{{timer}}</span></h1><input type="number" b-bind="timer"><p>testtekst {{someVal}} bla</p></div><p>{{timer}}</p>`
}