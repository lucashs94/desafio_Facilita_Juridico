import { useClientStore } from '@/stores/clientStore'
import { SearchIcon } from './svg/SearchIcon'
import { Input } from './ui/input'
import { ChangeEvent, useState } from 'react'

export function Search() {
  const [search, setSearch] = useState('')

  const loadClient = useClientStore((state) => state.load)

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    if (query) {
      setSearch(query)
      loadClient(query)
    } else {
      setSearch('')
      loadClient(query)
    }
  }

  return (
    <div className="flex items-center gap-4 p-4">
      <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      <Input
        className="flex-1"
        placeholder="Search clients..."
        type="search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  )
}
