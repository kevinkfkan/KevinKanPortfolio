import React, { Component } from 'react'

import styled from "styled-components";

import { BsChevronDoubleRight } from "react-icons/bs";

import {
    ProjectWrapper,
    ProjectImage,
    ProjectTitle,
    ProjectInfo,
    ProjectText,
    ProjectBullets
} from "../../styled/Styled";

import { ReadMore } from "../../styled/Buttons";

import PortfolioImg from "../../../assets/images/projects/portfolio.png";

export class Portfolio extends Component {
    render() {
        const P = styled.p`
        font-size: 16px;
        font-weight: bold;
    `;
        const Ul = styled.ul`

    `;
        const Li = styled.li`

    `;
        return (
            <ProjectWrapper href="https://github.com/kevinkfkan/KevinKanPortfolio" target="_blank">
                <ProjectImage src={PortfolioImg} />
                <ProjectText>
                    <ProjectTitle>Personal Website [2020]</ProjectTitle>
                    <ProjectInfo>
                        <P> Website to showcase projects and achievements </P>
                        <ProjectBullets>
                            <Li>
                                Created mainly with Django and React
                            </Li>
                            <Li>
                                Deployed using Heroku
                            </Li>
                        </ProjectBullets>
                    </ProjectInfo>
                    <ReadMore>Read More <BsChevronDoubleRight /></ReadMore>
                </ProjectText>
            </ProjectWrapper>
        )
    }
}

export default Portfolio
