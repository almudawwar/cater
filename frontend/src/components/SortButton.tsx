interface SortButtonProps {
  sortDirection: string
  onClick: (dir: string) => void
}

const iconDown = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>


const iconUp = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
</svg>

const iconSort = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fill-rule="evenodd" d="M13.78 10.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V5.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0ZM2.22 5.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.69a.75.75 0 0 1-1.5 0V4.56l-.97.97a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd" />
</svg>

export default function SortButton({ sortDirection, onClick }: SortButtonProps) {
  const handleOnClick = () => {
    if(sortDirection === '') {
      onClick('asc')
    }
    if(sortDirection === 'asc') {
      onClick('desc')
    }
    if(sortDirection === 'desc') {
      onClick('')
    }
  }

  const showIcon = sortDirection !== ''
  const icon = sortDirection === 'asc' ? iconUp : iconDown 

  return (
    <button className="flex items-center bg-orange-400 hover:bg-orange-300 active:bg-orange-300 rounded-md p-2 text-sm" onClick={handleOnClick}>
      {iconSort}
      {'Price'}
      {showIcon && icon}
    </button>
  )
}
