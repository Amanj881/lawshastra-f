import React from 'react'
import Header from '../components/Header/Header.js'
import Heros from '../components/Heros/Hero.js'
import Card from '../components/Card/Card.js'
import Footer from '../components/Footer/Footer.js'
import styled from 'styled-components';
import Motion from '../components/Motion/Motion.js'

const TileWrapper = styled.div`
  background: #fff;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transform: ${props => `scale(${props.scale})`};
`;

function Index(props) {
	    const { scale } = props;

	return (
		   
		<div>
		<Motion key="header" delay={300} from={"left"}>
			<Header />
			<Heros />
			<hr className="h-2 sharow-lg"/>
			</Motion>
			<Motion key="blog" delay={2000} from={"right"}>
			<Card label="Blog"/>
			</Motion>
			<Motion key="blog" delay={2500} from={"bottom"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Call For Paper"/>
			</Motion>
			<Motion key="blog" delay={3000} from={"left"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Webinar"/>
			</Motion>
			<Motion key="blog" delay={3500} from={"top"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Seminars"/>
			</Motion>
			<Motion key="blog" delay={4000} from={"left"}>
			<hr className="h-2 sharow-lg"/>
			<Footer />
			</Motion>
		</div>
		
	)
}

export default Index