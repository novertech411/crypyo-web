import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../Layout";
import MainTitle from "./MainTitle";
import person from "../img/person.jpg";
import avatar from "../img/computer.jpg";
import bitcoin from "../img/bitcoin.jpg";
import bitcoin2 from "../img/bitcoin2.jpg";
import bitcoin3 from "../img/bitcoin3.jpg";
import person3 from "../img/person3.jpg";
import computer from "../img/computer.jpg";
import GradientCard from "./GradientCard";
import CtaButton from './CtaButton';
function GradientCardSection() {
  return (
    <GradientCardSectionStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle
            title={"New Upcoming Items"}
            subtitle={"Discover Upcoming Items"}
            para={
              "Note that the development build is not optimizedTo create a production build, use npm run build."
            }
          ></MainTitle>
        </div>

        <div className="gradient-card-con">
          <GradientCard
            image={person}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
          <GradientCard
            image={person3}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
          <GradientCard
            image={bitcoin3}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
          <GradientCard
            image={bitcoin2}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
          <GradientCard
            image={bitcoin}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
          <GradientCard
            image={computer}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
          <GradientCard
            image={person}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
          <GradientCard
            image={bitcoin3}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
          <GradientCard
            image={person}
            avater={avatar}
            name={"@joel Clock"}
            price={"0.067 Eth"}
            title={"did not have any thing to say "}
          />
           
        </div>
        <div className="cta-btn">
              <CtaButton name={'view more'} />
            </div>
      </SectionStyled>
    </GradientCardSectionStyled>
  );
}

const GradientCardSectionStyled = styled.div`
.cta-btn{
  padding-top: 3rem;
  text-align: center;
}

`;

export default GradientCardSection;
