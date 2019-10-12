import styled from 'styled-components';

export const AlbumComponent = styled.section`
    width: 100%; 
    overflow: hidden;
    box-sizing: border-box;
`
export const ImageGroup = styled.section`
`
export const EachImage = styled.article`
    padding: 0 !important;
    cursor: pointer;
    height: 50vh;
    position: relative;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`
export const Title = styled.h4`
    color: #FFF;
    z-index: 99;
    position: absolute;
    text-transform: uppercase;
    bottom:8px;
    left: ${props=>( props.first ? '25px' : '15px' )} ;
    transition: all 0.4s ease-in-out;
    ${EachImage}:hover &{
        bottom:28px;
    }
`
export const SubTitle = styled(Title)`
    bottom: -5%;
    font-size: 12px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    left: ${props=>( props.first ? '27px' : '18px' )} ;
    ${EachImage}:hover &{
        bottom:10px;
        opacity: 1;

    }
`