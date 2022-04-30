import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layout';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';
import BlogsSection from './BlogsSection';

function BodyContent() {
  return (
    <BodyContentStyled>

<InnerLayout>
    <MainTitle title={'Top Sellers Of This Mounth'} subtitle={'All Entrepreneurs'} />
<div className="SellerCard">
<SellerCard />
<SellerCard />
<SellerCard />
</div>
<BlogsSection />
</InnerLayout>
    </BodyContentStyled>
  )
}

const BodyContentStyled = styled.main`

.SellerCard{
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 2rem;
margin: 2rem 0;

}

`;
export default BodyContent