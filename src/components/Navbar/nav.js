import React from 'react'
import Avatar from 'react-avatar';

function Nav() {
	return (
		<div className="w-full bg-white shadow-lg border-b-2 border-black">
			<div className="flex justify-between items-center">
				<h4 className=" ml-4 text-2xl font-bold">LawShastra</h4>
				<Avatar  name="LawShastra Journal" size="45" round={true} className="mr-4"/>
			</div>		
		</div>
	)
}

export default Nav