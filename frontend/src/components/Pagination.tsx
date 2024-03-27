import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useClientStore } from '@/stores/clientStore'

export function PaginationComp() {
  const { changePage } = useClientStore((state) => {
    return {
      changePage: state.changePageIndex,
    }
  })

  function handleChangePage(type: string) {
    if (type === 'I') {
      changePage('I')
    } else {
      changePage('D')
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handleChangePage('D')} />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={() => handleChangePage('I')} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
