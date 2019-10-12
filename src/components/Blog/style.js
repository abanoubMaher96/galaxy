import styled from 'styled-components';

export const BlogComponent = styled.section`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: #232323;
`
export const Pages = styled.a`
  cursor: pointer;
  font-size: 24px;
  font-weight: 300;
  padding: auto 0px;
  text-decoration: none;
`
export const Contain = styled.section`
  width: 85%;
  margin: auto;
  padding-top: 6%;
`
export const MainBody = styled.section`
`
export const Img = styled.img`
  width: 100%;
  padding-top: ${props=>(props.first ? '0' : '6%')};
`
export const BodyAside = styled.aside`
`

export const PagesUL = styled.ul`
  margin: 6% 0;
  padding:0;
`
export const PagesLI = styled.li`
  display: inline-block;
  cursor: pointer;
  color: ${props =>(props.active ? '#232323' : '#FFF')} ;
  background-color: ${props =>(props.active ? '#FFF' : '#414141')};
  padding: 10px 15px;
  margin-right: 8px;
  font-size: 16px;
  transition: all 0.2s ease-out;
  &:hover{
    opacity:${props =>(props.active ? '1' : '0.5')};
  }
`
