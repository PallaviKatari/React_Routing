import React, { Component } from "react";

class Table extends React.Component {
    render() {
      return (
        <table>
          <thead>
          <tr>
            <Columns />
          </tr>
          </thead>
        </table>
      );
    }
  }

  class Columns extends React.Component {
    render() {
      return (
        <>
          <td>Hello</td>
          <td>World</td>
        </>
      );
    }
  }

  // class Columns extends React.Component {
  //   render() {
  //     return (
  //       //Fragments let you group a list of children without adding extra nodes to the DOM.
  //       // <React.Fragment>
  //       //   <td>Hello</td>
  //       //   <td>World</td>
  //       // </React.Fragment>
  //       <>
  //       <td>Hello</td>
  //       <td>World</td>
  //     </>
  //     );
  //   }
  // }

  export default Table;