import { watch } from "./services";
export class BentComponent extends HTMLElement {
  constructor() {
    this._state = {};
    this.template = "";
    watch(this._state, () => {
      let prop_names = Object.keys(this._state);
      prop_names.forEach(prop_name =>
        watch(this._state[prop_name], () => this.render())
      );
    });
  }

  render() {
    this.innerHTML = templateEngine(this.template, this._state);
  }

  bindData(data = {}) {
    Object.assign(this._state, data);
  }

  getState() {
    return this._state;
  }
}
