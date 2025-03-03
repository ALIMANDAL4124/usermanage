import React from 'react'
import StateList from './StateList'

function CountryList({
  countries,
  states,
  cities,
  addState,
  addCity,
  editCountry,
  editState,
  editCity,
  deleteCountry,
  deleteState,
  deleteCity,
}) {
  return (
    <ul>
      {countries.map(country => (
        <li key={country.name}>
          <h2>{country.name}</h2>
          <button
            onClick={() =>
              editCountry(country.name, prompt('Enter new country name'))
            }
          >
            Edit Country
          </button>
          <button onClick={() => deleteCountry(country.name)}>
            Delete Country
          </button>
          <button
            onClick={() => addState(country.name, prompt('Enter state name'))}
          >
            Add State
          </button>
          <StateList
            countryName={country.name}
            states={states[country.name] || []}
            cities={cities[country.name] || {}}
            addCity={addCity}
            editState={editState}
            editCity={editCity}
            deleteState={deleteState}
            deleteCity={deleteCity}
          />
        </li>
      ))}
    </ul>
  )
}

export default CountryList
