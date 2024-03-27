import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'
import { useClientStore } from '@/stores/clientStore'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

export function PaginationComp() {
  const { changePage, page, totalCountClients } = useClientStore((state) => {
    return {
      changePage: state.changePageIndex,
      page: state.pageIndex,
      totalCountClients: state.clients?.length,
    }
  })

  function handleChangePage(type: string) {
    if (type === 'I') {
      changePage('I')
    } else {
      changePage('D')
    }
  }

  const disablePrevious = page <= 1
  const disableNext = page === Math.ceil(totalCountClients! / 10)

  return (
    <Pagination className="justify-end">
      <PaginationContent>
        <PaginationItem>
          <Button
            variant={'ghost'}
            className="flex items-center justify-center gap-2"
            onClick={() => handleChangePage('D')}
            disabled={disablePrevious}
          >
            <ChevronLeft className="size-4" />
            Previous
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            variant={'ghost'}
            className="flex items-center justify-center gap-2"
            onClick={() => handleChangePage('I')}
            disabled={disableNext}
          >
            Next
            <ChevronRight className="size-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
