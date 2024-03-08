import { useClientStore } from '@/stores/clientStore'
import { formatPhone } from '@/utils/phoneFormatter'

import { TrashButton } from './TrashButton'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'

export function TableClient() {
  const clients = useClientStore((state) => state.clients)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pl-6 flex-1">Name</TableHead>
          <TableHead className="w-[250px]">Email</TableHead>
          <TableHead className="w-[200px]">Phone</TableHead>
          <TableHead className="w-[150px]">X Coord</TableHead>
          <TableHead className="w-[150px]">Y Coord</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {clients &&
          clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="pl-6">
                <div className="flex items-center gap-4 py-2">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      Math.floor(Math.random() * 99) + 1
                    }.jpg`}
                    className="size-10 rounded-full"
                  />
                  <div className="font-medium">{client.name}</div>
                </div>
              </TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell className="font-mono">
                {formatPhone(client.phone)}
              </TableCell>
              <TableCell>{client.x}</TableCell>
              <TableCell>{client.y}</TableCell>
              <TableCell>
                <TrashButton clientId={client.id} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
