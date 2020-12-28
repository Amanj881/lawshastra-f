import React from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import { FaBlog } from 'react-icons/fa';
import { GiVendingMachine } from 'react-icons/gi';
import { BiGroup } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';

function SideNav() {

	const options = [

   {
    label:"Dashboard",
    value:"dashboard",
    url:"/dashboard",
    svg:<RiDashboardLine size={20}/>
   
  },
  {
    label:"Blogs",
    value:"blog",
    url:"/blogs",
     svg:<FaBlog size={20}/>
  },
  {
    label:"Opportunities",
    value:"opportunities",
    url:"/opportunities",
    svg:<GiVendingMachine  size={20}/>
  },
  {
    label:"Study Material",
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
			
		<div className="lg:w-1/5 hidden lg:flex">	
			<Sidebar options={options}/>
		</div>	
		</div>
	)
}

export default SideNav