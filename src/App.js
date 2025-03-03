import {useState} from 'react'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState({})
  const [cities, setCities] = useState({})

  const addCountry = countryName => {
    const newCountry = {name: countryName, states: []}
    setCountries([...countries, newCountry])
  }

  const addState = (countryIndex, stateName) => {
    const newStates = {...states}
    newStates[countryIndex] = newStates[countryIndex] || []
    newStates[countryIndex].push({name: stateName, cities: []})
    setStates(newStates)
  }

  const addCity = (countryIndex, stateIndex, cityName) => {
    const newCities = {...cities}
    newCities[countryIndex] = newCities[countryIndex] || []
    newCities[countryIndex][stateIndex] =
      newCities[countryIndex][stateIndex] || []
    newCities[countryIndex][stateIndex].push(cityName)
    setCities(newCities)
  }

  const editCountry = (index, countryName) => {
    const newCountries = [...countries]
    newCountries[index].name = countryName
    setCountries(newCountries)
  }

  const editState = (countryIndex, stateIndex, stateName) => {
    const newStates = {...states}
    newStates[countryIndex][stateIndex].name = stateName
    setStates(newStates)
  }

  const editCity = (countryIndex, stateIndex, cityIndex, cityName) => {
    const newCities = {...cities}
    newCities[countryIndex][stateIndex][cityIndex] = cityName
    setCities(newCities)
  }

  const deleteCountry = index => {
    const newCountries = [...countries]
    newCountries.splice(index, 1)
    setCountries(newCountries)
  }

  const deleteState = (countryIndex, stateIndex) => {
    const newStates = {...states}
    newStates[countryIndex].splice(stateIndex, 1)
    setStates(newStates)
  }

  const deleteCity = (countryIndex, stateIndex, cityIndex) => {
    const newCities = {...cities}
    newCities[countryIndex][stateIndex].splice(cityIndex, 1)
    setCities(newCities)
  }

  return (
    <div>
      <h1>Country Management</h1>
      <button onClick={() => addCountry(prompt('Enter country name'))}>
        Add Country
      </button>
      <CountryList
        countries={countries}
        states={states}
        cities={cities}
        addState={addState}
        addCity={addCity}
        editCountry={editCountry}
        editState={editState}
        editCity={editCity}
        deleteCountry={deleteCountry}
        deleteState={deleteState}
        deleteCity={deleteCity}
      />
    </div>
  )
}

export default App
