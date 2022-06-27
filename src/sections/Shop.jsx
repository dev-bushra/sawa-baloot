import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React, {useLayoutEffect, useRef} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import img1 from '../assets/Images/c1.jpg';
import img2 from '../assets/Images/c2.jpg';
import img3 from '../assets/Images/c3.jpg';
import img4 from '../assets/Images/c1.jpg';
import img5 from '../assets/Images/c3.jpg';
import img6 from '../assets/Images/c2.jpg';
import img7 from '../assets/Images/c1.jpg';
import img8 from '../assets/Images/c2.jpg';
import img9 from '../assets/Images/c3.jpg';
import img10 from '../assets/Images/c1.jpg';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Kaushan Script', sans-serif;
  font-weight: 300;
  text-shadow: 1px 1px 1px ${props => props.theme.body};
  color: ${props => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  
  min-height: 100vh;
  z-index: 5;
  
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p{
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p{
      font-size: ${props => props.theme.fontmd};
    }
  }
  @media (max-width: 48em) {
    width: 40%;
    p{
      font-size: ${props => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p{
      font-size: ${props => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  background-color: ${props => props.theme.grey};
  
  //width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  h1{
    width: 5rem;
    margin: 0 2rem;
  }
  

`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  img{
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  
  h1{
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em){
    width: 15rem;
  }
`;

const Product = ({img, title='img'}) => {
    return(
        <Item
            initial={{filter: 'grayscale(100%)'}}
            whileInView={{filter: 'grayscale(0%)'}}
            transition={{duration: 0.5}}
            viewport={{once: false, amount: 'all'}}
        >
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}

const Shop = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const horizontalRef = useRef(null);

    useLayoutEffect(()=>{
        let element = ref.current;
        let scrollingElement = horizontalRef.current;
        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();

        setTimeout(()=>{
            t1.to(element, {
                scrollTrigger:{
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                    // markers: true,
                },

                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none',
            })

            t1.to(scrollingElement, {
                scrollTrigger:{
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    // markers: true,
                },

                x: -pinWrapWidth,
                ease: 'none',
            })

            ScrollTrigger.refresh();
        }, 1000)
        return () => {
            t1.kill();
            ScrollTrigger.kill();
        };
    },[]);
    return (
        <Section ref={ref} id='shop'>
            <Title data-scroll data-scroll-speed='-1'>
              Unique Experience
            </Title>
            <Left>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maiores rerum eos ratione cupiditate ea ipsum quos voluptate non saepe assumenda expedita placeat delectus mollitia eso.
                    <br/>
                    <br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maiores rerum eos ratione cupiditate ea ipsum quos voluptate non saepe assumenda expedita placeat delectus mollitia eso.
                </p>
            </Left>
            <Right ref={horizontalRef}>
               <Product img={img1} title='Man Basics' />
               <Product img={img2} title='Tops' />
               <Product img={img3} title='Sweatshirts' />
               <Product img={img4} title='Ethnic Wear' />
               <Product img={img5} title='Blazers' />
               <Product img={img6} title='Suits' />
               <Product img={img7} title='Antiques' />
               <Product img={img8} title='Jewellery' />
               <Product img={img9} title='Watches' />
               <Product img={img10} title='Special Edition' />
            </Right>
        </Section>
    );
};

export default Shop;