import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png"
import img2 from "../Image/img2.png"
import img3 from "../Image/img3.png"
import img4 from "../Image/img4.png"
import img5 from "../Image/img5.png"
import img6 from "../Image/img6.png"
console.log(img6)
const Projects = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.
    <Box id="projects" textAlign={"center"} pt="130px" mt={"10"}>
      <Heading>Projects</Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "3" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom={"50px"}
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image:`${img5}`,
    desc: "TelePharmacy 24x7 is a digital healtcare platform, which provides online doctors consultation.",
    title: "TelePharmacy",
    techStack: ["React","Redux","Json-server"],
    github: "https://github.com/rk28284/tan-shock-2774",
    deploy: "https://tan-shock-2774.vercel.app/",
  },
  {
    image:`${img4}`,
    desc: "A collaborative coding platform for seamless teamwork, version control, and project management. Revolutionize your coding experience today",
    title: "CodeCollab",
    techStack: ["React","Node","Express"],
    github: "https://github.com/rk28284/native-fog-9540",
    deploy: "https://frondend-eight.vercel.app/",
  },
  {
    image:`${img6}`,
    desc: "Shayari Generator: Enter a keyword, get personalized Shayari! Enjoy creative verses on any topic with ChatGPT.",
    title: "Shayari Generator",
    techStack: ["React","OpenAI","ChakraUI"],
    github: "https://github.com/rk28284/shayari-generator",
    deploy: "https://65392cb6cabdb500888fc6c7--chic-gaufre-53f545.netlify.app/",
  },
  {
    image:`${img2}`,
    desc: "It  is an online survey service provider that allow users to create web browser based surveyss",
    title: "SurveyMonkey Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rk28284/SurveyHomes",
    deploy: "https://steady-choux-5544ac.netlify.app/",
  },
  {
    image:`${img3}`,
    title: "Paytm Mall Clone",
    desc: "It is India's Leading Online Shopping Website,your ultimate online shopping destination! ",
    techStack: ["Redux","React","Chakra-ui"],
    github: "https://github.com/rk28284/Styles-Up",
    deploy: "https://stylesup121.vercel.app/",
  },


  {
    image:`${img1}`,
    title: "Mytheresa Clone",
    desc: "Mytheresa is a German e-commerce luxury fashion company",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rk28284/wry-stitch-5509",
    deploy: "https://coruscating-meerkat-173874.netlify.app/",
  },
 

  ];

export default Projects;
