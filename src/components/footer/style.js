import styled from 'styled-components';

export const FooterComponent = styled.footer`
    width: 100%;
    height: 10vh;
    background-color: #313131;
    color: #FFF;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Parag =styled.p`
    font-size: 13px;
    transform: translateY(10px);
    letter-spacing: 0.5px;
    @media (max-width:426px) {
        font-size: 11px;
        padding: 0 10px 0 10px;
        text-align:center;
  }
`