import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import SmallHeading from "./SmallHeading";
import blockchain from "../img/bchain.png";
import CtaButton from "./CtaButton";

function MainContent() {
  return (
    <MainContentstyled>
      <Navigation />
      <div className="content">
        <div className="left">
          <SmallHeading
            title={"All Digital Currencies in One"}
            Identifier={"Before"}
          />
          <h1>
            All NFTs You need in One Marketplace The Best Place to Collect , Buy
            and Sell <span className="GradientText">Awesome NFTs</span>
          </h1>

          <p>
            lorem The href attribute requires a valid value to be accessible.
            Provide a valid, navigable address as the href value. If you cannot
            provide a valid href, but still need the element to resemb The href
            attribute requires a valid value to be accessible. Provide a valid,
            navigable address as the href value. If you cannot provide a valid
            href, but still need the element to resemb
          </p>

          <div className="btns-con">
          <CtaButton name={'discover more'} />
          <CtaButton name={'get help'} />
          </div>
           
        </div> 
        <div className="right">
          <img src={blockchain} alt="" />
        </div>
      </div>
    </MainContentstyled>
  );
}

const MainContentstyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  transform: translateX(-50%);
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;
    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      h1{
          padding: 1.8rem 0;
      }
    }

    .right{
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 60%;
    }
  }
`;

export default MainContent;
