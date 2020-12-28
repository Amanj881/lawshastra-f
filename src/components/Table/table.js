import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

function Table({headers,rows}) {
	return (
		<div className=" lg:overflow-hidden border-b border-gray-200 sm:rounded-lg mx-12">
		<table className="mx-auto min-w-full divide-y divide-gray-200">
			<TableHeader headers={headers}/>
			<TableBody rows={rows} headers={headers} />
		</table>
		</div>
	)
}

export default Table