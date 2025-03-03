// import React from 'react'
import CityList from './CityList'

function StateList({
  countryName,
  states,
  cities,
  addCity,
  editState,
  editCity,
  deleteState,
  deleteCity,
}) {
  return (
    <ul>
      {states.map(state => (
        <li key={state.name}>
          <h3>{state.name}</h3>
          <button
            type="button"
            onClick={() =>
              editState(countryName, state.name, prompt('Enter new state name'))
            }
          >
            Edit State
          </button>
          <button onClick={() => deleteState(countryName, state.name)}>
            Delete State
          </button>
          <button
            onClick={() =>
              addCity(countryName, state.name, prompt('Enter city name'))
            }
          >
            Add City
          </button>
          <CityList
            countryName={countryName}
            stateName={state.name}
            cities={cities[state.name] || []}
            editCity={editCity}
            deleteCity={deleteCity}
          />
        </li>
      ))}
    </ul>
  )
}

export default StateList
