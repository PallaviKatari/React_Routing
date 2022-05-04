import React, { Component } from "react";

class Table extends React.Component {
    render() {
      return (
        <table>
          <tr>
            <Columns />
          </tr>
        </table>
      );
    }
  }

//   class Columns extends React.Component {
//     render() {
//       return (
//         <div>
//           <td>Hello</td>
//           <td>World</td>
//         </div>
//       );
//     }
//   }

  class Columns extends React.Component {
    render() {
      return (
        //Fragments let you group a list of children without adding extra nodes to the DOM.
        // <React.Fragment>
        //   <td>Hello</td>
        //   <td>World</td>
        // </React.Fragment>
        <>
        <td>Hello</td>
        <td>World</td>
      </>
      );
    }
  }

  export default Table;