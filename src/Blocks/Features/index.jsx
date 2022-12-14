import React, { useRef, useCallback } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import Icon from "../../components/Icon";
import icon1 from "../..//assets/img/icons/stone1.svg";
import icon2 from "../..//assets/img/icons/stone2.svg";
import icon3 from "../..//assets/img/icons/stone3.svg";
import icon4 from "../..//assets/img/icons/stone4.svg";
import icon5 from "../..//assets/img/icons/stone5.svg";
import icon6 from "../..//assets/img/icons/stone6.svg";
import leftArrow from "../..//assets//img//icons/leftArrow.svg";
import rightArrow from "../..//assets//img//icons/rightArrow.svg";
import FeatureCard from "./FeatureCard";
const Features = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="features-container" id="feature">
      <div className="features-container2">
        <Icon imgsrc={icon1} classnamestyle="features--top" />
        <div
          className="features--title"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          SUSTAINABILITY AND LONGEVITY DRIVEN
        </div>
        <div className="container">
          <Swiper
            ref={sliderRef}
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            className="features--cards"
            breakpoints={{
              800: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className="aic">
              <FeatureCard
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                img={icon2}
                title="Daylight Token"
                description="$DAYL token is a deflationary C-Chain token with an elastic supply that rewards holders with a positive rebase reward over time for just holding. $DAYL also has unique utilities that will be introduced in our ecosystem extensions."
                small={'true'}
              />
            </SwiperSlide>
            <SwiperSlide className="aic">
              <FeatureCard
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                img={icon3}
                title="Auto-Compound"
                description="Through an auto-rebase system and fixed compound interest automatic staking protocol, holders get rewards directly in their wallets at a set APY of 160,589.28 percent that is sustainable and calculated with efficiency in parallel to RFV sustainability and survivability."
                small={'true'}
              />
            </SwiperSlide>
            <SwiperSlide className="aic">
              <FeatureCard
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                img={icon4}
                title="Daylight RFV"
                description="An independent wallet in the Daylight Protocol ecosystem is called the RFV. A percentage of the buy and sell trading costs that accumulate in the RFV, together with an algorithm that supports the Rebase Rewards, are used to fund the vault."
                small={'true'}
              />
            </SwiperSlide>
            <SwiperSlide className="aic">
              <FeatureCard
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-easing="ease-in-out"
                img={icon5}
                title="Dynamic Taxation"
                description="Our dynamic taxation seeks to reduce price manipulation by charging sales and wallet transfers additionally according to the size of the share the holder possesses in reference to Daylight's LP. This makes it impossible for someone with a large number of tokens in the ecosystem to dump the market."
                small={'true'}
              />
            </SwiperSlide>
            <SwiperSlide className="aic">
              <FeatureCard
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                img={icon6}
                title="Daylight Vault"
                description="The Daylight Vault is a protected safe that stores certain transactional fees received from the protocol and are used to extend the ecosystem by developing use cases for sustainability in regards to the Daylight Token, and to also invest in appreciative funds for the protocol, which are then used to fund development for ecosystem branches and components. 
            Daylight Vault is also considered as a SAFU fund for the protocol in the event of any DeFi related exploitations or loss of protocol funds. "
                small={'true'}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="aic">
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-easing="ease-in-out"
            data-aos-once={true}
            className="aic hover-effect"
            onClick={() => handlePrev()}
          >
            <Icon imgsrc={leftArrow} classnamestyle="features--arrow aic" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-easing="ease-in-out"
            data-aos-once={true}
            className="aic hover-effect"
            onClick={() => handleNext()}
          >
            <Icon imgsrc={rightArrow} classnamestyle="features--arrow aic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
