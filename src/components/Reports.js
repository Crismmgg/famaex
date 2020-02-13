import React from 'react';

function Reports(props) {
  return (
    <main>
      <ul className='reports__container'>
        {props.reports.map((report, index) => {
          const { id, name, Text } = report
          return (
            <li key={id} className={`reports__list__${index}`} >
              <h2 className='reports__title'>{name}</h2>
              <p className='reports__text'>{Text}</p>
            </li>)
        })}
      </ul >
    </main>)
}

export default Reports;