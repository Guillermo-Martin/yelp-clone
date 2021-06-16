import { useState } from "react";

export default initialVal => {
  // call useState hook (will return "value" and "setValue")
  const [ value, setValue ] = useState(initialVal);

  // create the handleInputChange function (for form inputs)
    // will call setValue and pass in "event.target.value"
  const handleInputChange = event => {
    setValue(event.target.value);
  } 

  // create the resetInput function (for reseting the form inputs)
    // will call setValue and pass in an empty string
  const resetInput = event => {
    setValue("");
  }

  // return an array with the value, handleInputChange function, and reset function
  return [value, handleInputChange, resetInput];
}
