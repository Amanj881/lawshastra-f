import React from 'react'
import Header from '../components/Header/Header.js'
import Heros from '../components/Heros/Hero.js'
import Card from '../components/Card/Card.js'
import Footer from '../components/Footer/Footer.js'

function Index() {
	return (
		<div>
			<Header />
			<Heros />
			<hr className="h-2 sharow-lg"/>
			<Card label="Blog"/>
			<hr className="h-2 sharow-lg"/>
			<Card label="Call For Paper"/>
			<hr className="h-2 sharow-lg"/>
			<Card label="Webinar"/>
			<hr className="h-2 sharow-lg"/>
			<Card label="Seminars"/>
			<hr className="h-2 sharow-lg"/>
			<Footer />
		</div>
	)
}

export default Index