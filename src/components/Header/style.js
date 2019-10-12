import styled from 'styled-components';

export const HeaderComponent = styled.header`
    display: flex;
    width: 100%;
    height: 45%;
    background-image: url(heading_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: flex-end;
    @media (max-width: 767px) {
        height: 35%;
    }
`
export const Title = styled.h3`
    color: #FFF;
    width: auto;
    text-transform: uppercase;
    padding: 20px 65px;
    background-color: rgba(250,250,250,0.1);
    margin: 0;
    font-weight: bold;
    border-radius: 2px;
    
`
export const TitleSpan = styled.span`
    font-weight: 100;
    font-family: Arial Narrow;
`