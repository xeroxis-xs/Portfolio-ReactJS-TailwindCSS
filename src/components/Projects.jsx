import { content } from "../Content";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { CardMedia } from "@mui/material";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col ">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col gap-5">
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
            {/* <Card sx={{ minWidth: 275 }}>
              <CardContent>
              <h5 className="font-bold font-Poppins">zzz</h5>

              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card> */}

          {Projects.project_content.map((content, i) => (
            <div className="rounded-md shadow-lg" data-aos="fade-up">
            <Card 
              sx={{ boxShadow: 0, borderRadius: '0.375rem'}}
              // className="rounded-lg shadow-lg"
              raised="false"
              key={i}>
              <CardMedia
                sx={{ height: 240 }}
                image={content.image}

              >
              {/* <img src={content.image} alt="..." /> */}
              </CardMedia>
              <CardContent>
                <h5 className="font-bold font-Poppins">{content.title}</h5>
                <p>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </p>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </div>
            ))}
          </div>
          {/* <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-md drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
