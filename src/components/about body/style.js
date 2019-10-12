import styled from 'styled-components';

export const About = styled.article`
    background-color: #232323;
    /* @media (min-width: 768px) and (max-width: 1100px) {
    margin-left: 44%;
    }; */
  @media (min-width: 1200px) {
    }
`
export const BodyContainer = styled.article`
    margin: auto !important ;
    padding-top: 5%;
    padding-bottom: 5%;
`
export const BodyInner = styled.article`
    text-align: center;
`
export const Section = styled.section`
    padding: 2%;
    letter-spacing: 0.5px;
    margin: 1%;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #313131;
    }
`
export const InnerTitle = styled.h6`
    color: #FFF;
    text-transform: uppercase;
    margin-top: 23px;
`
export const InnerDesc = styled.p`
    color: #FFF;
    font-size: 14px;
    color: #bbb;
`