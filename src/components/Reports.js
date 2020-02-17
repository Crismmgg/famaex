import React from 'react';
import PropTypes from 'prop-types';

function Reports(props) {
  const handleSort = (ev) => {
    props.handleSort({
      inputSort: ev.target.value
    })
  }
  return (
    <main>

      <ul className='reports__container'>
        {props.reports.map((report, index) => {
          const { id, name, Text } = report
          return (
            <li
              key={id}
              className={`reports__list__${index}`} >
              <h2 className='reports__title'>{name}</h2>
              <p className='reports__text'>{Text}</p>
            </li>)
        })}
      </ul >

      <div className='reports__order'>
        <select
          onChange={handleSort}
          value={props.sortValue}>
          <option value='id'>By id</option>
          <option value='date'>By date</option>
        </select>
      </div>

    </main>)
}
Reports.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
  sortValue: PropTypes.string
}

export default Reports;