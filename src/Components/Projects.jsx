import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png"
import img2 from "../Image/img2.png"
import img3 from "../Image/img3.png"
console.log(img1)
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
    image:`${img1}`,
    title: "Mytheresa Clone",
    desc: "Mytheresa is a German e-commerce luxury fashion company",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rk28284/wry-stitch-5509",
    deploy: "https://coruscating-meerkat-173874.netlify.app/",
  },
  {
    image:`${img2}`,
    desc: "It  is an online survey service provider that allow users to create web browser based surveyss",
    title: "SurveyMonkey Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/riyashri07/simple-tank-2275",
    deploy: "https://steady-choux-5544ac.netlify.app/",
  },
  {
    image:`${img2}`,
    title: "Paytm Mall Clone",
    desc: "It is India's Leading Online Shopping Website",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/defective-impulse-1904.git",
    deploy: "https://superb-haupia-a7c7f2.netlify.app/",
  },
  {
    image:`${img3}`,
    desc: "It is a hotel booking website for vacations",
    title: "Paytm Mall Clone",
    techStack: ["Redux", "React", "JSON"],
    github: "https://github.com/Suraj121704c/-easy-rose-1070",
    deploy: "https://styesup123112.netlify.app/",
  },
  ];

export default Projects;
