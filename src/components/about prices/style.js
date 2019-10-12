import styled from 'styled-components';


export const Prices = styled.article`
    background-color: #232323;
`
export const Contain = styled.article`
    margin: auto !important;
`
export const Table = styled.section`
    background-color: ${props=>(props.second ? '#f4dd5b' : '#313131')};
    text-align: center;
    margin: 5% 0;
    padding: 0 !important;
`
export const TableTitle = styled.p`
    color: ${props=>(props.second ? '#232323' : '#f4dd5b')};
    padding-top: 15%;
    font-weight: 200 !important;
    font-size: 36px;
`
export const TableSubTitle = styled.span`
    width: 100%;
    color: ${props=>(props.second ? '#232323' : '#AAA')};
    text-transform: capitalize;
    font-size: 15px;
    letter-spacing: 0.5px;
    padding-bottom: 35px;
    border-bottom: 1px solid #414141;
    display: inline-block;
    
`
export const TableUL = styled.ul`
    color: ${props=>(props.second ? '#232323' : '#FFF')};;
    list-style: none;
    padding-bottom: 50px;
    padding-left: 0;
`
export const TableLI = styled.li`
    padding-top: 10%;
    font-size: 13px;
    letter-spacing: 0.5px;
`