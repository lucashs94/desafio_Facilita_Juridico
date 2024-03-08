import { Trash } from 'lucide-react'
import { Button } from './ui/button'
import { useClientStore } from '@/stores/clientStore'

interface TrashProps {
  clientId: string
}

export function TrashButton({ clientId }: TrashProps) {
  const { onRemove } = useClientStore((state) => {
    return { onRemove: state.remove }
  })
  return (
    <div className="mr-4">
      <Button
        className=""
        onClick={() => onRemove(clientId)}
        variant={'secondary'}
      >
        <Trash className="text-red-600" />
      </Button>
    </div>
  )
}
