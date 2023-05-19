// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex xl:flex-row flex-col-reverse xl:items-center justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[28%] right-[-40%] min-[430px]:right-[-30%] lg:right-[-25%] md:right-[-15%] sm:right-[-5%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-10 pt-8" data-aos="fade-down">
          <h2 className="text-center">{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="xl:h-[28rem] md:h-96 h-80 pt-5 min-[400px]:pt-30">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover rounded-[25px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
