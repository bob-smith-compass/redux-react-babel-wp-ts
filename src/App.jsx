import React from "react";
import Form from "./components/form/Forms";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {["React", "Webpack", "Babel"].map((e, i) => (
          <div key={i}>{e}</div>
        ))}
        <a href="https://reactjs.org/docs/forms.html#the-select-tag">
          &lt;select&gt;
        </a>
        <br />
        <select name="" id="">
          <option value="React">React</option>
          <option value="Webpack">Webpack</option>
          <option value="Babel">Babel</option>
        </select>
        <Form />
      </div>
    );
  }
}
