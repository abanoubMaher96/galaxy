import React from 'react';
import {Details, Aside, AsideTitle, AsideParag, AsideContainer, Contain} from './style'

const AboutAside= () =>{
    return(
        <Details>
            <Contain className="container row justify-content-lg-end justify-content-md-center">
            <Aside className="col-lg-4 col-md-12">
                <AsideContainer>
                    <AsideTitle>
                        Aenean vehicula tincidunt
                    </AsideTitle>
                    <AsideParag>
                        Donec et nisi sed
                    </AsideParag>
                    <AsideParag>
                        Vivamus vitae libero euismod, pretium magna a,
                        vulputate metus. Curabitur et arcu felis. Praesent aliquet lectus in purus viverra varius.
                    </AsideParag>
                    <AsideParag>
                        Suspendisse et rutrum nisl. Phasellus porttitor metus vel justo blandit, in finibus neque
                        elementum. Nullam semper, turpis quis egestas consequat, dui eros tristique lectus,
                        ac euismod ex quam id mauris.
                    </AsideParag>
                </AsideContainer>
            </Aside>
            </Contain>
        </Details>
    )
}

export default AboutAside