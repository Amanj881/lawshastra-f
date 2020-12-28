import React from 'react'

function SimpleCard({label,background,category1,category2}) {
	return (
		
		<div className={`${background} rounded-lg shadow-lg w-1/2 h-auto m-6 flex flex-col `}>
			<span className="ml-4 text-xl font-semibold mt-4">{label}</span>
			<div className="flex justify-between  flex-wrap mt-12">
			<div className="flex flex-col">
				<span className="ml-4 text-xl font-semibold">{category1}</span>
				<span className="self-center">4</span>
			</div>	
			<div className="flex flex-col ">
				<span className="mr-4 text-xl font-semibold">{category2}</span>
				<span className="self-center">4</span>
				</div>
			</div>
		</div>
		
	)
}

export default SimpleCard