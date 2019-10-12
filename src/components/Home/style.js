import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  z-index: 99;
  transition: all 1s ease-in-out;
`
export const Video = styled.video`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
`
export const Contain = styled.div`
  z-index: 999;
  position: absolute;
  height: 100%;
  width: 100%;
  top:-10%;
`
export const Desc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center !important;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`
export const Title = styled.h1`
  color: #FFF; 
  letter-spacing: 2px;
  font-weight: bolder;
  font-size: 45px;
  text-transform: uppercase;
  @media (max-width: 767px) {
    text-align: center;
    }
 
`
export const TitleSpan = styled.p`
  color: #FFF; 
  font-weight: 100;
  font-size: 45px;
  display: inline-block;
  letter-spacing: 2px;
  text-transform: uppercase;
`
export const SubTitle = styled(Title)`
  font: icon;
  line-height: 2;
  text-transform: capitalize;
`
export const GoArrow = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 70%;
  left: 47%;
  cursor: pointer;
  outline:none;
  @media (max-width: 767px) {
    left: 44%;
    }
`
export const OpenMenu = styled.section`
  background: rgba(0, 0, 0, 0.95);
  color: #FFF;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  transform: translateY(-100%);
  overflow-y: auto;
  transition: all 0.5s;
  opacity: 0;
  color: #FFF;
  padding: 0px;
  &::-webkit-scrollbar{
    display: none;
  }
`
export const Menu = styled.div`
  margin-top:10%;
  transform: translateY(50%);
  opacity: 0;
  transition: all 0.3s;
  transition-delay: 0s;
`
export const Ul = styled.ul`
  list-style: none;
  padding: 0 !important;

`
export const Li = styled.li`
  margin: 4%;
  margin-left: 45%;
  display: table;
  transition: all 0.4s;
  padding: 0px;
  &:hover{
    color: rgba(250,250,250,0.5);
  };
  @media (min-width: 768px) and (max-width: 1100px) {
    margin-left: 44%;
    };
  @media (max-width: 767px) {
    margin-left: 37%;
    }
 
`
export const Pages = styled.a`
  cursor: pointer;
  font-size: 24px;
  font-weight: 300;
  padding: auto 0px;
  text-decoration: none;
`
export const LinkItem = styled(Link)`
  cursor: pointer;
  font-size: 24px;
  font-weight: 300;
  padding: auto 0px;
  text-decoration: none;
  color: #FFF;
  transition: all 0.4s;
  padding: 0px;
  &:hover{
    color: rgba(250,250,250,0.5);
    text-decoration: none;
  };
`
export const MenuParag = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin: 7% 0 0 4%;
`
