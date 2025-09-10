import { useSearchParams } from 'react-router-dom'
import Select from './Select'

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortByValue = searchParams.get('sortBy') || ''

  const handleChange = e => {
    searchParams.set('sortBy', e.target.value)
    setSearchParams(searchParams)
  }

  return (
    <Select
      type="white"
      options={options}
      value={sortByValue}
      onChange={handleChange}
    />
  )
}

export default SortBy
