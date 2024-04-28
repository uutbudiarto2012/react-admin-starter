import ReactPaginate from 'react-paginate';
import Icon from '../Icon';

const Pagination = ({
  currentPage,
  pageCount,
  onPageChange
}: {
  currentPage: number
  pageCount: number
  onPageChange: ({ selected }: { selected: number }) => void

}) => {
  const PC = pageCount && pageCount > 1 ? pageCount : 0;
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className='w-full mt-4 flex flex-col gap-2 items-center justify-between md:flex-row border-t md:pt-4'>
      <div className='flex items-center gap-2 text-sm my-3 md:my-0'>
        <div>Show</div>
        <select name="perpage" id="perpage" className='outline-none'>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <div>Rows</div>
      </div>
      <ReactPaginate
        breakLabel={<Icon className='h-4 w-4' name='Ellipsis' />}
        nextLabel={<NextTriggerComp />}
        previousLabel={<PrevTriggerComp />}
        onPageChange={onPageChange}
        pageRangeDisplayed={1}
        initialPage={currentPage - 1 || 0}
        pageCount={PC}
        renderOnZeroPageCount={null}
        breakClassName='hidden md:flex'
        containerClassName="flex flex-wrap justify-center md:justify-end items-center  gap-y-2 gap-x-1"
        pageClassName="min-w-7 bg-slate-200 text-sm rounded-lg overflow-hidden hidden md:flex"
        pageLinkClassName="flex px-3 py-1.5 line-clamp-1"
        activeLinkClassName="bg-slate-800 text-slate-50 font-bold line-clamp-1"
        nextLinkClassName="flex px-1.5 py-1.5 bg-slate-200 rounded-lg"
        previousLinkClassName="flex px-1.5 py-1.5 bg-slate-200 rounded-lg"
      />
    </div>
  )
}


const NextTriggerComp = () => {
  return (
    <div className="flex items-center">
      <p className='text-sm md:hidden'>Next</p>
      <Icon name='ChevronRight' />
    </div>
  )
}
const PrevTriggerComp = () => {
  return (
    <div className="flex items-center">
      <Icon name='ChevronLeft' />
      <p className='text-sm md:hidden'>Previous</p>
    </div>
  )
}
export default Pagination