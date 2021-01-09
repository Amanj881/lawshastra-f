import React,{useState,useEffect} from 'react'
import Table from '../components/Table/table'
import Loader from '../components/Loader/Loader.js'
import {Link} from 'react-router-dom'
import { BsPencil } from 'react-icons/bs';
import { FcFullTrash } from 'react-icons/fc';
import { GrView } from 'react-icons/gr';
import { MdPublish } from 'react-icons/md';
import axios from '../http-common';

function Blogs() {

	const [data, setData] = useState();
	const [loader, setLoader] = useState(true)
	useEffect(() => {
		getBlog();
	}, [])

	const head = {
		"Id":"",
		"Title":"",
		"Author":"",
		"Category":"",
		"Actions":"",
	}

	const getBlog = async () => {
	 	await axios.get('/blogs')
	 	.then(response => response.data)

  			.then((infor) => {
  				console.log(infor)
  				let res = infor.slice(0,4).map((info,index)=>{
  					return{
  					'Id':index+1,
  					'Title':info.title,
  					'Author':info.aname,
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
		<div className="m-4">
			{loader ? <Loader />:<>
				<div className="flex justify-end mr-12 mb-4">	
					<Link to='/addBlog' className="py-2 px-4 font-bold rounded-full text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out uppercase bg-gradient-to-r from-indigo-600 to-indigo-700">Add Blog</Link>
					
				</div>			
				<Table headers={Object.keys(head)} rows={data} />
			</>
			}
		</div>
	)
}

export default Blogs