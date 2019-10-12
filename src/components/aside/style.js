import styled from 'styled-components';

export const AsideSearch = styled.input`
  width: 100% ;
  height: 43px ;
  border: none ;
  background-color: rgba(250,250,250,0.1) ;
  padding: 15px ;
  outline: none ;
  color: #FFF ;
  font-size: 14px ;
  border-radius: 0 ;
  transition: all 0.3s;
  &:focus{
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }
`
export const AsideTitle = styled.h5`
  color: #FFF ;
  border-bottom: 1px solid #414141;
  padding: 13% 0 4% 0;
  font-weight: bold;
  font-size: 16px;
  text-transform: capitalize;
  letter-spacing: 0.5px;
`
export const AsideUL = styled.ul`
  list-style: none;
  padding: 0;
`
export const AsideLI = styled.li`
  padding-top: 10px;
`
export const AsideAnchor = styled.a`
  padding-top: 10px;
  color: #FFF;
  font-size: 12px;
  font-weight: 100;
  transition: all 0.2s ease-in-out;
  &:hover{
    opacity: 0.5;
    color: #FFF;
    text-decoration: none;
  }
`
export const TextContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
`
export const AsideAnImg = styled.img`
  display: inline-block;
`
export const AsideAnTitle = styled.h6`
  display: block;
  margin: 0;
`
export const AsideAnSpan = styled.span`
  display: inline-block;
  color: #f4dd5b;
  padding-top: 2px; 
`
export const AsideGallery = styled.img`
`