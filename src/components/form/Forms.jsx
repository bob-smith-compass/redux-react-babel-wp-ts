import React, { Component } from "react";

export default class Forms extends Component {
    constructor(props) {
        super(props);

    }

    handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }
    /**
     * This form has the default HTML form behavior of browsing to a new page when the user submits the form. 
     * If you want this behavior in React, it just works. But in most cases, 
     * it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. 
     * The standard way to achieve this is with a technique called 
     * “controlled components”.
     * We can combine the two by making the React state be the “single source of truth”. 
     * Then the React component that renders a form also controls what happens in that form on subsequent user input. 
     * An input form element whose value is controlled by React in this way is called a “controlled component”.
     */
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
