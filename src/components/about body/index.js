import React from 'react';
import { About, BodyInner, InnerTitle, InnerDesc, Section, BodyContainer} from './style'

const AboutBody= () =>{
    return(
        <About>
            <BodyContainer>
                <BodyInner className="row justify-content-center">
                    <Section className="col-lg-3 col-md-5">
                        <img src="service_1.png" />
                        <InnerTitle>Free css template</InnerTitle>
                        <InnerDesc>
                            Highway is a good CSS template that is available for free.
                            Please tell your friends about templatemo site. Thank you.
                        </InnerDesc>
                    </Section>
                    <Section className="col-lg-3 col-md-5">
                        <img src="service_2.png" />
                        <InnerTitle>Aenean Pellentesque</InnerTitle>
                        <InnerDesc>
                            Donec et nisi sed magna tincidunt fermentum. Pellentesque eget semper felis, 
                            sit amet scelerisque neque.
                        </InnerDesc>
                    </Section>
                    <Section className="col-lg-3 col-md-5">
                        <img src="service_3.png" />
                        <InnerTitle>Quisque Et Odio</InnerTitle>
                        <InnerDesc>
                            Donec et nisi sed magna tincidunt fermentum. Pellentesque eget semper felis,
                            sit amet scelerisque neque.
                        </InnerDesc>
                    </Section>
                </BodyInner>
                <BodyInner className="row justify-content-center">
                    <Section className="col-lg-3 col-md-5">
                        <img src="service_4.png" />
                        <InnerTitle>Nullam Et Justo</InnerTitle>
                        <InnerDesc>
                            Donec et nisi sed magna tincidunt fermentum. Pellentesque eget semper felis,
                                sit amet scelerisque neque.
                        </InnerDesc>
                    </Section>
                    <Section className="col-lg-3 col-md-5">
                        <img src="service_5.png" />
                        <InnerTitle>Integer Ac Justo</InnerTitle>
                        <InnerDesc>
                            Donec et nisi sed magna tincidunt fermentum. Pellentesque eget semper felis,
                                sit amet scelerisque neque.
                        </InnerDesc>
                    </Section>
                    <Section className="col-lg-3 col-md-5">
                        <img src="service_6.png" />
                        <InnerTitle>Nunc Sit Amet Nibh</InnerTitle>
                        <InnerDesc>
                            Donec et nisi sed magna tincidunt fermentum. Pellentesque eget semper felis,
                                sit amet scelerisque neque.
                        </InnerDesc>
                    </Section>
                </BodyInner>
            </BodyContainer>
        </About>
    )
}

export default AboutBody