import React, { Fragment} from 'react';
import { Img, ImgDesc, DescDate, DescTitle, DescParag, DescBtn, LinkPost, DescBtnBack} from './style';

const BlogBody= (post) =>{
    return(
    <Fragment>
        <Img src={post.src} alt={post.alt}/>
        <ImgDesc>
            <DescDate>{post.writer}</DescDate>/
            <DescDate left>{post.date}</DescDate>/
            <DescDate left>{post.type}</DescDate>
            <DescTitle>{post.title}</DescTitle>
            <DescParag>{post.parag1}</DescParag>
            <DescParag>{post.parag2}</DescParag>
            <DescParag>{post.parag3}</DescParag>
            <DescBtn></DescBtn>
            <LinkPost to="/single"><DescBtn>{post.btn}</DescBtn></LinkPost>
            <LinkPost to="/blog"><DescBtnBack>{post.back}</DescBtnBack></LinkPost>
        </ImgDesc>
    </Fragment>
    )
}
  
  export default BlogBody;