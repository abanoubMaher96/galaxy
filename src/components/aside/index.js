import React, {Fragment} from 'react';
import { AsideSearch, AsideTitle, AsideUL, AsideLI, AsideAnchor, AsideAnImg, AsideAnTitle, AsideAnSpan, TextContainer, AsideGallery} from './style';

const Aside= () =>{
    return(
        <Fragment>
            <AsideSearch type="text" name="search" placeholder="search..." />
            <AsideTitle>Archives</AsideTitle>
            <AsideUL>
                <AsideLI><AsideAnchor href="#">> 2018 September (4)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> 2018 August (16)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> 2018 July (5)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> 2018 May (3)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> 2018 February (27)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> 2017 December (18)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> 2017 November (12)</AsideAnchor></AsideLI>
            </AsideUL>
            <AsideTitle>Recent Posts</AsideTitle>
            <AsideUL>
                <AsideLI>
                    <AsideAnchor href="#">
                        <AsideAnImg src="recent_post_1.png" alt="1"/>
                        <TextContainer>
                        <AsideAnTitle>Duis Mollis Orci</AsideAnTitle>
                        <AsideAnSpan>16 September 2018</AsideAnSpan>
                        </TextContainer>
                    </AsideAnchor>
                </AsideLI>
                <AsideLI>
                    <AsideAnchor href="#">
                        <AsideAnImg src="recent_post_2.png" alt="2"/>
                        <TextContainer>
                            <AsideAnTitle>Etiam quis tem</AsideAnTitle>
                            <AsideAnSpan>10 August 2018</AsideAnSpan>
                        </TextContainer>
                    </AsideAnchor>
                </AsideLI>
                <AsideLI>
                    <AsideAnchor href="#">
                        <AsideAnImg src="recent_post_3.png" alt="3"/>
                        <TextContainer>
                            <AsideAnTitle>Proin at augue</AsideAnTitle>
                            <AsideAnSpan>16 July 2018</AsideAnSpan>
                        </TextContainer>
                    </AsideAnchor>
                </AsideLI>
            </AsideUL>
            <AsideTitle>Categories</AsideTitle>
            <AsideUL>
                <AsideLI><AsideAnchor href="#">> Lifestyle (7)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> Branding (9)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> Nature (14)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> Work Stuff (6)</AsideAnchor></AsideLI>
                <AsideLI><AsideAnchor href="#">> Science (5)</AsideAnchor></AsideLI>
            </AsideUL>
            <AsideTitle>Latest Gallery</AsideTitle>
            <AsideUL>
                <AsideLI>
                    <div className="row">
                        <AsideAnchor className="col-3" href="#"><AsideGallery src="latest_gallery_1.png"/></AsideAnchor>
                        <AsideAnchor className="col-3" href="#"><AsideGallery src="latest_gallery_2.png"/></AsideAnchor>
                        <AsideAnchor className="col-3" href="#"><AsideGallery src="latest_gallery_3.png"/></AsideAnchor>
                        <AsideAnchor className="col-3" href="#"><AsideGallery src="latest_gallery_4.png"/></AsideAnchor>
                    </div>
                </AsideLI>
                <AsideLI>
                    <div className="row">
                        <AsideAnchor className="col-3" href="#"><AsideGallery src="latest_gallery_5.png"/></AsideAnchor>
                        <AsideAnchor className="col-3" href="#"><AsideGallery src="latest_gallery_6.png"/></AsideAnchor>
                        <AsideAnchor className="col-3" href="#"><AsideGallery src="latest_gallery_7.png"/></AsideAnchor>
                        <AsideAnchor className="col-3" href="#"><AsideGallery src="latest_gallery_8.png"/></AsideAnchor>
                    </div>
                </AsideLI>
            </AsideUL>
        </Fragment>
    )
}

export default Aside