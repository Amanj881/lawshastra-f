import React from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import { AiOutlineUser } from 'react-icons/ai';
import { GiVendingMachine } from 'react-icons/gi';
import { BiGroup } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';
import Nav from '../components/Navbar/nav'
import Card from '../components/Card/simpleCard.js'

function Dashboard() {

	const options = [

   {
    label:"Dashboard",
    value:"dashboard",
    url:"/admin-dashboard",
    svg:<RiDashboardLine size={20}/>
   
  },
  {
    label:"Blogs",
    value:"blog",
    url:"/blogs",
     svg:<AiOutlineUser size={20}/>
  },
  {
    label:"Opportunities",
    value:"opportunities",
    url:"/opportunities",
    svg:<GiVendingMachine  size={20}/>
  },
  {
    label:"Stude Material",
    value:"study-material",
    url:"/study-material",
    svg:<BiGroup size={20}/>
  },
  

  ]
  const BlogData = [
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/random/350x250',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	},
	]

	return (
		<div>
			<Nav />
			<div className="flex  w-full">
			<div className="w-1/5">	
			<Sidebar options={options}/>
			</div>
			<div className="w-4/5 flex">
			<Card label="Blog" category1="Published" category2="unPublished" background="bg-green-200"/>
			<Card label="Opportunity" category1="Published" category2="unPublished" background="bg-indigo-200"/>
			<Card label="Material" background="bg-purple-200" category1="Published" category2="unPublished" />
			</div>
			</div>
		</div>
	)
}

export default Dashboard