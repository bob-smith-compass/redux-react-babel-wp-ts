import React, { Component } from "react";

export default class Forms extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
