import React from 'react'

function CityList({countryName, stateName, cities, editCity, deleteCity}) {
  return (
    <ul>
      {cities.map(city => (
        <li key={city}>
          {city}
          <button
            onClick={() =>
              editCity(
                countryName,
                stateName,
                city,
                prompt('Enter new city name'),
              )
            }
          >
            Edit City
          </button>
          <button onClick={() => deleteCity(countryName, stateName, city)}>
            Delete City
          </button>
        </li>
      ))}
    </ul>
  )
}

export default CityList
