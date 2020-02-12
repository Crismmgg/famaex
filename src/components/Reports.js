import React from 'react';

function Reports(props) {
  console.log(props.reports)
  return (
    <ul className='reports__container'>
      {props.reports.map(report => {
        const { id, name, Text } = report
        return (
          <li key={id} className='reports__list'>
            <h2 className='reports__title'>{name}</h2>
            <p className='reports__text'>{Text}</p>
          </li>)
      })}
    </ul>)
}

export default Reports;