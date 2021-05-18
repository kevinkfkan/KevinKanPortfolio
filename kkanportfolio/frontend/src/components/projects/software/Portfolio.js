import React, { Component } from 'react'

import styled from "styled-components";

import { BsChevronDoubleRight } from "react-icons/bs";

import { ProjectWrapper, ProjectImage, ProjectText, ProjectTitle, ProjectInfo } from "../../styled/Styled";
import { ReadMore } from "../../styled/Buttons";

import PortfolioImg from "../../../assets/images/projects/portfolio.png";

export class Portfolio extends Component {
    render() {
        const P  = styled.p`
        font-size: 16px;
        font-weight: bold;
    `;
    const Ul = styled.ul`

    `;
    const Li = styled.li`

    `;
        return (
            <ProjectWrapper>
            <ProjectImage src={PortfolioImg} />
            <ProjectText>
                <ProjectTitle>Personal Website [2020]</ProjectTitle>
                <ProjectInfo>
                    <P> Created a website to showcase projects and achievements </P>
                    <Ul>
                        <Li>
                            Created mainly with Django and React
                        </Li>
                        <Li>
                            Deployed using netlify 
                        </Li>
                        <Li>
                            Learned to use pipenv, npm, webpack, babel etc
                        </Li>
                    </Ul>
                </ProjectInfo>
                <ReadMore>Read More <BsChevronDoubleRight /></ReadMore>
            </ProjectText>
        </ProjectWrapper>
        )
    }
}

export default Portfolio
