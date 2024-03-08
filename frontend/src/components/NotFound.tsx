import { FileSearchIcon } from './svg/FileSearchIcon'

export function NotFound() {
  return (
    <div className="grid items-center h-[300px]">
      <div className="space-y-4 text-center">
        <FileSearchIcon className="mx-auto h-10 w-10" />
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We cant find data from api! Verify if it exists.
        </p>
      </div>
    </div>
  )
}
