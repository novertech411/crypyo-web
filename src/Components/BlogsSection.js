import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layout';
import MainTitle from './MainTitle';

function BlogsSection() {
  return (
    <BlogsSectionStyled>
        <SectionStyled>
            <div className='title-con'>
                <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={'Note that the development build is not optimizedTo create a production build, use npm run build.'} />

                
            </div>
        </SectionStyled>
    </BlogsSectionStyled>
  )
}

const BlogsSectionStyled = styled.div`

`;
export default BlogsSection