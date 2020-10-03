import React from "react";
import App from "./App";
import ListOfEmployee from "./components/ListOfEmployee";
import ReactDOM from "react-dom";
it("renders App2", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListOfEmployee />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("My Test Suite", () => {
  it("My Test Case 2", () => {
    expect(true).toEqual(true);
  });
});
