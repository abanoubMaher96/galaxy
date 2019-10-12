import styled from 'styled-components';

export const NavbarComponent = styled.nav`
    width: 100%;
    height: 75px;
    position: fixed;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.5);
    z-index: 9999;
    background-color: rgba(250,250,250,0.2);
    transition: all 0.8s ease-in-out;
`
export const Logo = styled.span`
    margin: 2% 0 0 2%;
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
    float: left;
    color: #FFF;
    letter-spacing: 0.5px;
    @media (max-width: 768px) {
      margin: 5% 0 0 3%
    }
`

export const Span = styled.span`
    font-weight: 100;
`
export const Icon = styled.div`
    background: transparent;
    border: 1px solid #FFF;
    width: 50px;
    height: 50px;
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    margin: 0 2% 0 auto;
    top: 15%;
`
export const IconLines = styled.span`
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 35px;
    display: block;
    content: '';
    background-color: #FFF;
    position: absolute;
    left: 15%;
    top: 50%;
    transition: all 0.5s ease-in-out;

  &:before{
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 35px;
    display: block;
    content: '';
    background-color: #FFF;
    position: absolute;
    top: -10px;
    transition: all 0.5s ease-in-out;
  }

  &:after{
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 35px;
    display: block;
    content: '';
    background-color: #FFF;
    position: absolute;
    top: 10px;
    transition: all 0.5s ease-in-out;
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
export const MenuParag = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin: 7% 0 0 4%;
`