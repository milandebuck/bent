import { watch, templateEngine } from "./services";
export class BentComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // get data
    this._state = this.data();

    // create shadow root
    const shadow = this.attachShadow({ mode: "open" });
    this._node = document.createElement("div");
    shadow.appendChild(this._node);

    //make local state reactive
    watch(this._state, () => {
      console.log("change!");
      this.render();
    });

    //run initialize methods
    this.onInit();

    //render the HTML
    this.render();
  }
  render() {
    this._node.innerHTML = templateEngine(this.template, this._state);
  }
  getState() {
    return this._state;
  }

  data() {
    return {};
  }

  onInit() {}
}
