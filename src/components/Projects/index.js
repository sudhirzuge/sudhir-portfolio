import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from frontend apps to
          full-stack apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Frontend Apps" ? (
            <ToggleButton
              active
              value="Frontend Apps"
              onClick={() => setToggle("Frontend Apps")}
            >
              Frontend Apps
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Frontend Apps"
              onClick={() => setToggle("Frontend Apps")}
            >
              Frontend Apps
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Backend Apps" ? (
            <ToggleButton
              active
              value="Backend Apps"
              onClick={() => setToggle("Backend Apps")}
            >
              Backend Apps
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Backend Apps"
              onClick={() => setToggle("Backend Apps")}
            >
              Backend Apps
            </ToggleButton>
          )}
          <Divider />
          {toggle == "Full Stack Apps" ? (
            <ToggleButton
              active
              value="Full Stack Apps"
              onClick={() => setToggle("Full Stack Apps")}
            >
              Full Stack Apps
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Full Stack Apps"
              onClick={() => setToggle("Full Stack Apps")}
            >
              Full Stack Apps
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
