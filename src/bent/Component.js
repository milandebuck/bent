import { watch, TemplateEngine } from "./services";
export class BentComponent extends HTMLElement {
      this._state = {};
    this.template = "";
    constructor(dom_node) {
    super();

    watch(this._state, () => {
      let prop_names = Object.keys(this._state);
      prop_names.forEach(prop_name =>
        watch(this._state[prop_name], () => this.render())
      );
    });
  }

  render() {
    templateEngine(this.template, this._state);
  }

  bindData(data = {}) {
    Object.assign(this._state, data);
  }

  getState() {
    return this._state;
  }
}
