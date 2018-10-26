import { Bent, getState } from "./bent/core";
import { ExampleComponent } from "./components/";

Bent("#app", {
  ExampleComponent
});
const state = getState();
setInterval(() => {
  state.ExampleController.timer += 1;
}, 1000);
