import React from 'react'

function Search() {
	return (
		<div className="p-8 md:w-2/5 w-auto  mx-auto">
  			<div className="bg-white flex items-center rounded-full shadow-xl h-12 border-2 border-blue-400">
    			<input className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
    				<div className="">
      					<button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
        					icon
      					</button>
      				</div>
    		</div>
  		</div>
	)
}

export default Search