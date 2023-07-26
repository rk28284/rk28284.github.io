import { Box, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  const githubUsername = "rk28284"; 

  return (
    <Box marginTop={"130px"} textAlign="center">
      <Heading>GitHub Stats</Heading>
      <Stack>
        <Box className="react-activity-calendar" m={"auto"} mt="50px" mb={"40px"}>
          <Link href={`https://github.com/${githubUsername}`} target="_blank">
            <GitHubCalendar username={githubUsername} />
          </Link>
        </Box>
        <Flex
          w={"100%"}
          m="auto"
          justifyContent={{ base: "center", md: "space-around" }}
          marginTop="30px"
          direction={{ base: "column", md: "row" }}
        >
          <Link w={{ base: "100%", md: "33%" }} mt={{ base: "10px", md: "0px" }} href={`https://github.com/${githubUsername}`} target="_blank">
            <Flex justifyContent={"center"}>
              <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=rk28284" />
            </Flex>
          </Link>

          <Link w={{ base: "100%", md: "30%" }} mt={{ base: "10px", md: "0px" }} href={`https://github.com/${githubUsername}`} target="_blank">
            <Flex justifyContent={"center"}>
              <Image id="github-top-langs" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&show_icons=true&locale=en&layout=compact`} />
            </Flex>
          </Link>

          <Link w={{ base: "100%", md: "31%" }} mt={{ base: "10px", md: "0px" }} href={`https://github.com/${githubUsername}`} target="_blank">
            <Flex justifyContent={"center"}>
              <Image id="github-stats-card" src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en`} />
            </Flex>
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Stats;
