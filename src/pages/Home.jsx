import styled from "styled-components";
import { useEffect, useState } from "react";
import WritingText from "../components/container/WritingText.jsx";
import CubeRotateAnimation from '../components/container/CubeRotateAnimation.jsx';

const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`;

const Article = styled.article`
    position: relative;
    width: 50%;
    padding-bottom: 2rem;
    @media (max-width:900px){
        width: 100%;
    } 
`;
const AnimateMoveImage = styled.div`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    color: white;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 6rem;
    animation: delayToBlink 3s infinite;

    @keyframes delayToBlink {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`;
const Img = styled.img`
    width: 3rem;
    height: 3rem;
`;

const Home = () => {

    const [writingTextHeight, setWritingTextHeight] = useState("20rem");

    const updateWritingTextHeight = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 930)
            setWritingTextHeight("15rem");
        if (screenWidth < 600 && screenWidth > 400)
            setWritingTextHeight("15rem");
        if (screenWidth < 400)
            setWritingTextHeight("25rem");
    };

    useEffect(() => {
        updateWritingTextHeight();
        window.addEventListener('resize', updateWritingTextHeight);
        return () => {
            window.removeEventListener('resize', updateWritingTextHeight);
        };
    }, []);
    return (
        <Main>
            <Article>
                <Title>Discover my portfolio and immerse yourself in a unique journey of talent and passion.</Title>
                <WritingText text={`In this space, I present a tour of my achievements,
                outstanding skills and projects. Each item has been carefully
                selected to reflect my dedication, experience and unique vision in the field
                web development and programming in all its splendor.
                I invite you to explore my portfolio and discover how together we can
                bring great ideas to life! Do not hesitate to contact me for future collaborations or any
                query you may have.`} height={writingTextHeight} />
            </Article>
            <Article>
                <AnimateMoveImage><Img src="src/assets/image/arrow-prev-svgrepo-com.svg" /> SHIFT <Img src="src/assets/image/arrow-next-svgrepo-com.svg" /></AnimateMoveImage>
                <CubeRotateAnimation />
            </Article>
        </Main>

    );
}

export default Home;
