import { useClientStore } from '@/stores/clientStore'
import { UsersIcon } from './svg/UsersIcon'
import { ThemeToggle } from './theme/theme.toggle'
import { Button } from './ui/button'

interface HeaderProps {
  onToggle: (state: boolean) => void
}

export function Header({ onToggle }: HeaderProps) {
  const { showRoute } = useClientStore((state) => {
    return {
      showRoute: state.showRoute,
    }
  })

  return (
    <header className="flex items-center h-16 px-12 py-10 border-b lg:h-16 gap-4 dark:border-gray-800">
      <div className="flex items-center gap-4 text-lg font-semibold lg:text-2xl">
        <UsersIcon className="h-6 w-6" />
        Clients
      </div>

      <Button
        className="ml-auto"
        onClick={() => onToggle(true)}
      >
        New Client
      </Button>

      <Button
        variant="default"
        onClick={() => showRoute('f')}
      >
        <span className="">Create Route</span>
      </Button>

      <ThemeToggle />
    </header>
  )
}
