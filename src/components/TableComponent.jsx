import {useState} from 'react'
import './TableComponent.css'

const TableComponent = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      column1: '',
      column2: [],
    },
  ])

  const [options1] = useState([
    {value: 'Option 1', label: 'Option 1'},
    {value: 'Option 2', label: 'Option 2'},
    {value: 'Option 3', label: 'Option 3'},
  ])

  const [options2, setOptions2] = useState([
    {value: 'Option A', label: 'Option A'},
    {value: 'Option B', label: 'Option B'},
    {value: 'Option C', label: 'Option C'},
  ])

  const handleAddRow = () => {
    setRows(prevRows => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        column1: '',
        column2: [],
      },
    ])
  }

  const handleColumn1Change = (rowId, value) => {
    setRows(prevRows =>
      prevRows.map(row => (row.id === rowId ? {...row, column1: value} : row)),
    )
  }

  const handleColumn2Change = (rowId, values) => {
    setRows(prevRows =>
      prevRows.map(row => (row.id === rowId ? {...row, column2: values} : row)),
    )
  }

  const handleAddOption2 = value => {
    setOptions2(prevOptions => [...prevOptions, {value, label: value}])
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>
                <select
                  value={row.column1}
                  onChange={e => handleColumn1Change(row.id, e.target.value)}
                >
                  <option value="">Select an option</option>
                  {options1.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  multiple
                  value={row.column2}
                  onChange={e =>
                    handleColumn2Change(
                      row.id,
                      Array.from(
                        e.target.selectedOptions,
                        option => option.value,
                      ),
                    )
                  }
                >
                  {options2.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  <option value="add-new">Add new option</option>
                </select>
                {row.column2.includes('add-new') && (
                  <input
                    type="text"
                    placeholder="Enter new option"
                    onBlur={e => handleAddOption2(e.target.value)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleAddRow}>
        Add new row
      </button>
    </div>
  )
}

export default TableComponent
