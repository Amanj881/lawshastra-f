import React,{useEffect,useState} from 'react'

import Card from '../components/Card/simpleCard.js'
import  Table from '../components/Table/table'
import Loader from '../components/Loader/Loader.js'

function Dashboard() {

	const [data, setData] = useState();
	const [loader, setLoader] = useState(true)
	

	const head = 
	{
		"Id":"",
	  	"userId": "",
	  	"title": "",
	  	"Action":""
	  
	}

	 useEffect(() => {
	 	getData();

	 }, [])

	 const getData = async () => {
	 	await fetch('https://jsonplaceholder.typicode.com/todos')
  			.then(response => response.json())
  			.then((infor) => {
  				console.log(infor)
  				let res = infor.slice(0,2).map((info,index)=>{
  					return{
  					'Id':info.id,
  					'userId':info.userId,
  					'title':info.title,
  				}

  				})
  				setData(res);
  				setLoader(false);

  			})

	 }

	return (
		<div>
			
			{loader ? (<Loader />): <>
				<div >
					<div className="flex">
					<Card label="Blog" category1="Published" category2="unPublished" background="bg-green-200"/>
					<Card label="Opportunity" category1="Published" category2="unPublished" background="bg-indigo-200"/>
					<Card label="Material" background="bg-purple-200" category1="Published" category2="unPublished" />
				</div>
				<Table headers={Object.keys(head)} rows={data}/>
				</div>
				</>
			}
			
		</div>
	)
}

export default Dashboard