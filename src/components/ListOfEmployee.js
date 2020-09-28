import React from "react";
// import "./Table.css";
const mystyle = {
  border: "1px solid gray",
  width: "500px"
};

function ListOfEmployee() {
  return (
    <div>
      <table id="listtable" style={mystyle}>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
      </table>
    </div>
  );
}
export default ListOfEmployee;
