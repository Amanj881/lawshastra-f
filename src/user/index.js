import React from 'react'
import Header from '../components/Header/Header.js'
import Heros from '../components/Heros/Hero.js'
import Card from '../components/Card/Card.js'
import Footer from '../components/Footer/Footer.js'
import styled from 'styled-components';
import Motion from '../components/Motion/Motion.js'

const headerOptions = [
{
	label:'Home',
	value:'home'
},
{
	label:'Blogs',
	value:'blog'
},
{
	label:'Question Bank',
	value:'question-bank'
},
]

function Index(props) {
	const { scale } = props;

	return (
		   
		<div>
		<Motion key="header" delay={300} from={"left"}>
			<Header headerOptions={headerOptions}/>
			<Heros />
			<hr className="h-2 sharow-lg"/>
			</Motion>
			<Motion key="blog" delay={2000} from={"right"}>
			<Card label="Blog"/>
			</Motion>
			<Motion key="cop" delay={2500} from={"bottom"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Call For Paper"/>
			</Motion>
			<Motion key="webinar" delay={3000} from={"left"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Webinar"/>
			</Motion>
			<Motion key="seminar" delay={3500} from={"top"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Seminars"/>
			</Motion>
			<Motion key="footer" delay={4000} from={"left"}>
			<hr className="h-2 sharow-lg"/>
			<Footer />
			</Motion>
		</div>
		
	)
}

export default Index