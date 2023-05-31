import {FiSearch} from 'react-icons/fi'

function Search({setSearchText, text}) {
  return (
    <div className='flex flex-row items-center bg-gray-800 rounded space-x-2 pr-2 text-white'>
        <input 
            type='search' 
            placeholder={text}
            className='bg-transparent border-none outline-none text-white'
            onChange={(e)=> setSearchText(e.target.value)}
        />
        <FiSearch size={20} />
    </div>
  )
}

export default Search