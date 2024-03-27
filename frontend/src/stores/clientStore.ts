import { create } from 'zustand'

import { api } from '@/lib/axios'

export interface Client {
  id: string
  name: string
  email: string
  phone: string
  x: number
  y: number
}

type CreateClientProps = Omit<Client, 'id'>

export interface ClientStoreProps {
  clients: Client[] | null
  route: Client[] | null
  isLoading: Boolean

  routeDialogOpen: boolean

  pageIndex: number

  changePageIndex: (type: string) => void

  toggleRouteDialog: (state: boolean) => void

  add: (data: CreateClientProps) => Promise<void>
  remove: (id: string) => Promise<void>
  load: (query?: string) => Promise<void>
  showRoute: (q: 'f' | 'a') => Promise<void>
}

export const useClientStore = create<ClientStoreProps>((set, get) => ({
  clients: null,
  route: null,
  isLoading: true,
  routeDialogOpen: false,

  pageIndex: 1,

  changePageIndex: (type) => {
    const { pageIndex, load } = get()

    if (type === 'I') {
      set({ pageIndex: pageIndex + 1 })
      load()
    }

    if (type === 'D' && pageIndex > 1) {
      set({ pageIndex: pageIndex - 1 })
      load()
    }
  },

  toggleRouteDialog: (state) => {
    if (state) {
      set({ routeDialogOpen: true })
    } else {
      set({ routeDialogOpen: false })
    }
  },

  load: async (query?: string) => {
    const { pageIndex } = get()

    try {
      if (query !== '' && query !== undefined) {
        const { data } = await api.get(
          `/clients?q=${query}&pageIndex=${pageIndex}`
        )
        set({ clients: data, isLoading: false })
      } else {
        const { data } = await api.get(`/clients?pageIndex=${pageIndex}`)
        set({ clients: data, isLoading: false })
      }
    } catch (error) {
      set({ clients: [], isLoading: false })
    }
  },

  showRoute: async (q: string) => {
    try {
      const { data } = await api.get(`/clients/route?q=${q}`)

      set({ route: data, routeDialogOpen: true })
    } catch (error) {
      set({ route: [] })
    } finally {
      set({ isLoading: false })
    }
  },

  add: async (dataProps: CreateClientProps) => {
    try {
      await api.post('/clients', { ...dataProps })
    } catch (error) {
      throw error
    }
  },

  remove: async (id) => {
    const { clients } = get()

    try {
      await api.delete(`/clients/${id}`)

      if (clients) {
        const newClients = clients.filter((client) => client.id !== id)
        set({ clients: newClients })
      }
    } catch (error) {
      throw error
    }
  },
}))
