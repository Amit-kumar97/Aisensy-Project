import React from 'react'
import './Download.css';
const data = [
  {
    name:"amit",
    number: "8597383573",
    country: "India",
    source:"API"
  },
  {
    name:"manav",
    number: "5632583573",
    country: "China",
    source:"API"
  },
  {
    name:"moon",
    number: "2483583573",
    country: "Japan",
    source:"API"
  },
  {
    name:"chloe",
    number: "9987383573",
    country: "Pillipins",
    source:"API"
  },
  {
    name:"santner",
    number: "7897383573",
    country: "New Zeland",
    source:"API"
  },
  {
    name:"marsh",
    number: "5797383573",
    country: "Autralia",
    source:"API"
  },
  {
    name:"amit",
    number: "8597383573",
    country: "India",
    source:"API"
  },
  {
    name:"manav",
    number: "5632583573",
    country: "China",
    source:"API"
  },
  {
    name:"moon",
    number: "2483583573",
    country: "Japan",
    source:"API"
  },
  {
    name:"chloe",
    number: "9987383573",
    country: "Pillipins",
    source:"API"
  },
  {
    name:"santner",
    number: "7897383573",
    country: "New Zeland",
    source:"API"
  },
  {
    name:"marsh",
    number: "5797383573",
    country: "Autralia",
    source:"API"
  }
];
const Download = () => {
  return (
    <div className='container'>
      <div className="box-container">
        <div className="download-button">
          <button>Download</button>
        </div>
      <table className='table-contact'>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Name</th>
          <th>Number</th>
          <th>Country</th>
          <th>Source</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td><input type="checkbox"/></td>
              <td>{val.name}</td>
              <td>{val.number}</td>
              <td>{val.country}</td>
              <td>{val.source}</td>
            </tr>
            )
        })}
        </table>
      </div> 
    </div>
  )
};

export default Download;
