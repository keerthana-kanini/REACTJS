import {Component} from "react";
class Table extends Component{
    render(){
        return (
        <table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ram</td>
      <td>CSE</td>
   
    </tr>
    <tr>
      <td>Reema</td>
      <td>ECE</td>
    
    </tr>
    <tr>
      <td>Riya</td>
      <td>EEE</td>
   
    </tr>
  </tbody>
</table>
    )}
}
export default Table;