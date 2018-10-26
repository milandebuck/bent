import { RegisterComponent } from "./services";

const stateContainer = {};
/**
 * exports the stat container
 */
export const getState = () => stateContainer;

/**
 * Bootstrap
 * @param root the root node
 * @param cmpnts the component data to load defaults to nothing
 */
const Bent = root => {
  //Object.assign(components, cmpnts);
  // Object.keys(cmpnts).forEach(key => {
  //   console.log(cmpnts);
  //   components[key] = RegisterComponent(cmpnts[key]);
  // });
  //storeNodes(document.querySelector(root) || document);
  //render();
  return {
    RegisterComponent
  };
};

export default Bent;
