import styled from 'styled-components';

export const AboutComponent = styled.section`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
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
export const MenuParag = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin: 7% 0 0 4%;
`