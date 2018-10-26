import Bent, { getState } from "./bent/core";
import { ExampleComponent } from "./components/";

const bent = Bent("#app");
bent.RegisterComponent("example-component", ExampleComponent);
