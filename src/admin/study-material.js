import React,{useState,useEffect} from 'react'
import Table from '../components/Table/table'
import DropDown from '../components/SelectInput/SelectInput'
import {Link} from 'react-router-dom'
import Loader from '../components/Loader/Loader.js'
import { BsPencil } from 'react-icons/bs';
import { FcFullTrash } from 'react-icons/fc';
import { GrView } from 'react-icons/gr';
import { MdPublish } from 'react-icons/md';

function Study() {

	const [data, setData] = useState();
	const [loader, setLoader] = useState(true)
	useEffect(() => {
		getMaterial();
	}, [])

		const head = {
		"Id":"",
		"Title":"",
		"Type":"",
		"Category":"",
		"Actions":"",
	}
	const options = [{
		label:'Notes',
	},
	{
		label:'Case_Analysis'
	}
	]


	const getMaterial = async () => {
	 	await fetch('https://jsonplaceholder.typicode.com/posts')
  			.then(response => response.json())
  			.then((infor) => {
  				console.log(infor)
  				let res = infor.slice(0,2).map((info,index)=>{
  					return{
  					'Id':index+1,
  					'Title':info.title,
  					'Type':info.userId,
  					'Category':info.body,
  					Actions:(
		                <div className="flex w-full">
		                <Link to="#" className="text-indigo-600 hover:text-indigo-900 mr-4"><BsPencil color='#2827CC' size={20} /></Link>
		                <Link to="#" className="text-indigo-600 hover:text-indigo-900 mr-4"><FcFullTrash color='#2827CC' size={20}/></Link>
		                <Link to="#" className="text-indigo-600 hover:text-indigo-900 mr-4"><GrView color='#2827CC' size={20}/></Link>
		                <Link to="#" className="text-indigo-600 hover:text-indigo-900 mr-4"><MdPublish color='#2827CC' size={20}/></Link>
		                </div>
                )

  				}
  				})
  				setData(res);
  				setLoader(false);
  			})
  		}
	return (
		<div className="lg:m-12 ">
			{loader ? <Loader />:
			<>
				<div className="m-6">
					<DropDown options={options} styleClass="mb-4 border-2 shadow-lg rounded-lg p-4 w-full overflow-hidden"	/>
					<div className="flex justify-between">	
						<Link className="py-2 px-4 font-bold rounded-full text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out uppercase bg-gradient-to-r from-indigo-600 to-indigo-700">Add Material</Link>
						<Link className="py-2 px-4 font-bold rounded-full text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out uppercase bg-gradient-to-r from-indigo-600 to-indigo-700">Add Subjects</Link>
					</div>
				</div>
				<Table headers={Object.keys(head)} rows={data} />
			</>	
			}
		</div>
	)
}

export default Study