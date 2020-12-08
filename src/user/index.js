import React from 'react'
import Header from '../components/Header/Header.js'
import Heros from '../components/Heros/Hero.js'
import Card from '../components/Card/Card.js'
import Footer from '../components/Footer/Footer.js'
import styled from 'styled-components';
import Motion from '../components/Motion/Motion.js'
import BlogCard from '../components/Card/Card2.js'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const headerOptions = [
{
	label:'Home',
	value:'home'
},
{
	label:'Blogs',
	value:'blog',
},
{
	label:'Question Bank',
	value:'question-bank'
},
]

const cardData = [
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

function Index(props) {
	const { scale } = props;

	return (
		   
		<div>
		<Motion key="header" delay={300} from={"left"}>
			<Heros />
			<hr className="h-2 sharow-lg"/>
			</Motion>
			<Motion key="blog" delay={2000} from={"right"}>
			<Card label="Blog" cardData={cardData}/>
			</Motion>
			 <Motion key="cop" delay={2500} from={"bottom"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Call For Paper"  cardData={cardData} />
			</Motion>
			<Motion key="webinar" delay={3000} from={"left"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Webinar"  cardData={cardData}/>
			</Motion>
			<Motion key="seminar" delay={3500} from={"top"}>
			<hr className="h-2 sharow-lg" />
			<Card label="Seminars"  cardData={cardData}/>
			</Motion>
			<Motion key="footer" delay={4000} from={"left"}>
			<hr className="h-2 sharow-lg"/>
			<Footer />
			</Motion>
			<BlogCard />
		</div>
		
	)
}

export default Index