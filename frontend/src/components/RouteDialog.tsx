import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent } from './ui/card'
import { useClientStore } from '@/stores/clientStore'

export function RouteDialog() {
  const { routeList, open, onOpen } = useClientStore((state) => {
    return {
      routeList: state.route,
      open: state.routeDialogOpen,
      onOpen: state.toggleRouteDialog,
    }
  })

  return (
    <Dialog
      open={open}
      onOpenChange={onOpen}
    >
      <DialogContent className="p-8 max-w-6xl gap-10 max-h-[800px] overflow-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
        <DialogTitle className="text-3xl">Route Order</DialogTitle>
        <div className="space-y-4 py-2 max-h-fit">
          {routeList &&
            routeList.map((client, i) => (
              <Card key={client.id}>
                <CardContent className="flex items-center p-2 px-6 gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-8 rounded-full border-2 border-muted-foreground">
                      {i + 1}
                    </div>
                    <div className="font-medium w-[120px] line-clamp-1">
                      {client.name}
                    </div>
                  </div>

                  <div className="w-[240px] flex justify-start">
                    {client.email}
                  </div>
                  <div className="font-mono w-[180px]">{client.phone}</div>
                  <div className="font-mono w-[100px]">{client.x}</div>
                  <div className="font-mono w-[100px]">{client.y}</div>
                </CardContent>
              </Card>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
