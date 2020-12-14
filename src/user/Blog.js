import React,{useState} from 'react'
import BlogCard from '../components/Card/Card.js'
import Search from '../components/Search/search.js'
import Pagination from '../components/Pagination/Pagination.js'

const BlogData = [
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/random/720x400',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	},
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/collection/190727/720x400',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	},
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/user/erondu/720x400',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	},
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/random/720x400',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	},
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/collection/190727/720x400',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	},
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/user/erondu/720x400',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	}



]

 	
function Blog() {

	const [perPage, setPerPage] = useState(6);
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(perPage);

	return (
		<div>
			<Search/>
			<BlogCard label="Blog" cardData={BlogData} start={start} end={end}/>
			<Pagination />
		</div>
	)
}

export default Blog