import React from 'react';
import {HeaderComponent, Title, TitleSpan} from './style'

const Header= (page) =>{
    return(
        <HeaderComponent>
            <Title>{page.name} <TitleSpan>{page.subname}</TitleSpan></Title>
        </HeaderComponent>
    )
}

export default Header