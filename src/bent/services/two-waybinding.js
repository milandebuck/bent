/**
 * add events regarding two way data binding back to the state container
 * @param element the html element on which to bind the events
 * @param controllerName  name of the controller so its possible to lookup the property to bind the data to
 */
export const twoway_binding = (element, controllerName) => {
  //get prop name on attribute b-bind
  let prop = element.getAttribute(["b-bind"]);

  //bind initial value
  //bind multiple events
  ["change", "keypress"].forEach(event => {
    element.addEventListener(event, () => {
      //get current value for type checking
      let stateVal = getState()[controllerName][prop];
      //cast to type
      if (typeof stateVal === "number") stateVal = Number(element.value);
      else if (typeof stateVal === "string") stateVal = String(element.value);
      //put new value in state container
      getState()[controllerName][prop] = stateVal;
    });
  });
};
