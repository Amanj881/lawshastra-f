import React,{useState,useEffect} from 'react'
import Header from '../components/Header/Header.js'
import Heros from '../components/Heros/Hero.js'
import Card from '../components/Card/Card.js'
import Footer from '../components/Footer/Footer.js'
import styled from 'styled-components';
import Motion from '../components/Motion/Motion.js'
import BlogCard from '../components/Card/Card2.js'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


const cardData = [
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/random/350x250',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	},
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/collection/190727/350x250',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	},
	{
		category:'category',
		title:'The Catalyzer',
		img:'https://source.unsplash.com/user/erondu/350x250',
		content:'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'
	}



]

function Index(props) {
	const { scale } = props;

	const [showBlog, handleShowBlog] = useState(false);
	const [showCof, handleShowCof] = useState(false);
 	const [showWebinar, handleShowWebinar] = useState(false);
	const [showSeminar, handleShowSeminar] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
    	console.log("df",window.scrollY);
      if (window.scrollY >0) {
        handleShowBlog(true);
      }
   		else if (window.scrollY > 1200) {
        handleShowBlog(true);
      }
     else if (window.scrollY > 2400) {
        handleShowBlog(true);
      }
     else if (window.scrollY > 3600) {
        handleShowBlog(true);
      }
       else 
       {
       	handleShowBlog(false);
       	

       }
       	
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const backToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

	return (
		<>
		   
		<div>
		<Motion key="header" delay={300} from={"left"}>
			<Heros />
			
			</Motion>
			{showBlog &&
			<Motion key="blog" delay={600} from={"right"}>
			<Card label="Blog" cardData={cardData}/>
			</Motion>
			}
			{showBlog &&
			 <Motion key="cop" delay={900} from={"right"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Call For Paper"  cardData={cardData} />
			</Motion>
			}
			{showBlog &&
			<Motion key="webinar" delay={1200} from={"left"}>
			<hr className="h-2 sharow-lg"/>
			<Card label="Webinar"  cardData={cardData}/>
			</Motion>
		}
		{showBlog &&
			<Motion key="seminar" delay={1500} from={"top"}>
			<hr className="h-2 sharow-lg" />
			<Card label="Seminars"  cardData={cardData}/>
			</Motion>
		}
		
			<hr className="h-2 sharow-lg"/>
			
			
		
		</div>

		
		</>
	)
}

export default Index