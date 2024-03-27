import { useEffect, useState } from 'react'

import { useClientStore } from '@/stores/clientStore'

import { DrawerForm } from '@/components/DrawerForms'
import { Header } from '@/components/Header'
import { TableClient } from '@/components/TableClient'
import { NotFound } from '@/components/NotFound'
import { Search } from '@/components/Search'
import { Spineer } from '@/components/Spinner'
import { RouteDialog } from '@/components/RouteDialog'
import { PaginationComp } from '@/components/Pagination'

export function Client() {
  const [openDrawer, setOpenDrawer] = useState(false)

  const { clients, loadClients, isLoading, addClient } = useClientStore(
    (state) => {
      return {
        clients: state.clients,
        loadClients: state.load,
        isLoading: state.isLoading,
        addClient: state.add,
      }
    }
  )

  function toggleDrawer(state: boolean) {
    if (state) {
      setOpenDrawer(true)
    } else {
      setOpenDrawer(false)
    }
  }

  useEffect(() => {
    loadClients()
  }, [addClient])

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header onToggle={toggleDrawer} />

      <DrawerForm
        openDrawer={openDrawer}
        onToggle={toggleDrawer}
      />

      <RouteDialog />

      <main className="flex-1 p-4 md:p-6">
        <div className="w-full max-w-6xl mx-auto grid gap-4">
          <div className="border rounded-lg">
            <Search />
          </div>
          <div className="border rounded-lg max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-track-background scrollbar-thumb-muted-foreground dark:scrollbar-thumb-muted">
            {isLoading ? (
              <Spineer />
            ) : clients && clients.length > 0 ? (
              <TableClient />
            ) : (
              <NotFound />
            )}
          </div>
          {clients && clients.length > 0 && <PaginationComp />}
        </div>
      </main>
    </div>
  )
}
