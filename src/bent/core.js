import {
  registerComponent,
  TemplateEngine,
  twoway_binding,
  watch
} from "./services";

//contains root nodes with bent-controller attributes
const nodeContainer = [];

//state container
const stateContainer = {};

//initial configuration of the different bant-controllers
const components = {};
/**
 * stores and processes the DOM nodes in the nodeContainer
 * @param root root DOM element
 */
function storeNodes(root) {
  //get nodes
  let nodes = root.querySelectorAll("[bent-controller]");
  for (let i = 0; i < nodes.length; i++) {
    appendNode(nodes[i]);
  }
}
/**
 * get the corresponding Data of the DOM node and store it in node & state container
 * @param element the dom element
 */
function appendNode(element) {
  //get Controller name
  let name = element.getAttribute("bent-controller");
  //get two way binding nodes
  let bindNodes = element.querySelectorAll("input[b-bind]");
  for (let i = 0; i < bindNodes.length; i++) {
    //add twowaybinding where needed
    twoway_binding(bindNodes[i], name);
  }
  //deep clone to preserve template syntax
  let clone = element.cloneNode(true);
  try {
    //get data from corresponding component
    let data = new components[name]();
    let node = {
      element,
      name,
      clone
    };
    //add Data to state container + enable watching on var change
    stateContainer[name] = watch(data, () => {
      render();
    });
    nodeContainer.push(node);
  } catch (e) {
    console.error(`${name} not found`, e);
  }
}
/**
 * Renders the manipluated Dom
 */
export function render() {
  for (let i = 0; i < nodeContainer.length; i++) {
    BrowseNodes(
      nodeContainer[i].element,
      nodeContainer[i].clone,
      getState()[nodeContainer[i].name]
    );
  }
}

/**
 * Browse all nodes and Templates the leaf nodes (recursive)
 * @param parentNode the root node on which to start
 * @param
 */
function BrowseNodes(parentNode, original, data) {
  if (parentNode.children.length > 0) {
    //brows children
    for (let i = 0; i < parentNode.children.length; i++) {
      BrowseNodes(parentNode.children[i], original.children[i], data);
    }
  } else {
    //template leaf node
    parentNode.innerHTML = TemplateEngine(original.innerHTML, data);
  }
}

/**
 * exports the stat container
 */
export const getState = () => stateContainer;

/**
 * Bootstrap
 * @param root the root node
 * @param cmpnts the component data to load defaults to nothing
 */
export const Bent = (root, cmpnts = {}) => {
  //Object.assign(components, cmpnts);
  Object.keys(cmpnts).forEach(key => {
    console.log(cmpnts);
    components[key] = registerComponent(new cmpnts[key]());
  });
  //storeNodes(document.querySelector(root) || document);
  //render();
};
