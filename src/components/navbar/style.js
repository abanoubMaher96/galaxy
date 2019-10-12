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