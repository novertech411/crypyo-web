import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layout';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';
import BlogsSection from './BlogsSection';
import GradientCardSection from './GradientCardSection';
import DemonstrationSection from './DemonstrationSection';
import ContactSection from './ContactSection';

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
<GradientCardSection /> 
<DemonstrationSection />
</InnerLayout>
<ContactSection />

<footer>
  <p>Copyright @YourName. All Right Reserved</p>
</footer>
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

footer{
  display: flex;
  align-items: center;  
  justify-content: center;
  padding: 3rem 0;
  background-color: #020a27;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  p{
    opacity: 0.7;
    text-align: center;
  }
}

`;
export default BodyContent