import { content } from "../Content";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = () => {
  const { experiences } = content;
  return (
    <section id="experiences">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {experiences.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {experiences.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-8 justify-center ">
            {experiences.experience_content.map((exp, i) => (
              <div className="flex flex-wrap bg-bg_light_primary rounded-lg shadow-lg">
                <div className="lg:h-full flex items-center justify-center w-1/2 lg:w-3/12 ">
                  <div
                    key={i}
                    data-aos="fade-right"
                    data-aos-delay={exp * 300}
                    className="
                    relative group w-full flex flex-wrap items-center justify-center
                      p-0 max-w-max"
                  >
                    <img
                      src={exp.logo}
                      alt="..."
                      className="duration-200 w-8/12 pt-10 lg:pt-0"
                    />
                    <h4 className="subtitle pl-10 pt-10 w-full lg:text-center lg:pl-0">{exp.year}</h4>
                  </div>
                </div>
                <div className="w-full lg:w-9/12">
                  <div
                    data-aos="fade-left"
                    data-aos-delay={exp * 300}
                    className="
                      relative group w-full h-full items-center
                      p-10 pt-0 lg:p-10 lg:pl-2 max-w-max"
                  >
                    <div>
                      <h2 className="title">{exp.title}</h2>
                      <h4 className="subtitle pb-5">{exp.subtitle}</h4>
                      {exp.para.map((exp_para, j) => (
                        <p key={j} className="pb-2">{exp_para}</p>
                      ))}
                      
                    </div>
                  </div>
                  </div>
              </div>
          ))}
        </div>


    
        
        {/* <div className="flex gap-5 justify-between flex-wrap group">
          {experiences.experience_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={content.logo} alt="..." className="mx-auto" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Experiences;
