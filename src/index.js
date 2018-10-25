import { Bent, getState } from "./bent/core";
import {
  ExampleController,
  HomeController,
  RandomController
} from "./controllers/";

Bent("#app", {
  ExampleController,
  HomeController,
  RandomController
});
const state = getState();
setInterval(() => {
  state.ExampleController.timer += 1;
}, 1000);
