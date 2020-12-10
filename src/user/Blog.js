import React from 'react'
import BlogCard from '../components/Card/Card.js'
import Search from '../components/Search/search.js'

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
	return (
		<div>
			<Search/>
			<BlogCard label="Blog" cardData={BlogData}/>
		</div>
	)
}

export default Blog