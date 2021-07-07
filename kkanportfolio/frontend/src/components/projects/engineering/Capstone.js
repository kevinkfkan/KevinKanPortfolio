import React, { Component } from 'react'

import styled from "styled-components";

import { BsChevronDoubleRight } from "react-icons/bs"

import {
    ProjectWrapper,
    ProjectImage,
    ProjectTitle,
    ProjectInfo,
    ProjectText,
    ProjectBullets
  } from "../../styled/Styled";

import { ReadMore } from "../../styled/Buttons";

import CapstoneWingXFLR5 from "../../../assets/images/projects/CapstoneWingXFLR5.png";

export class Capstone extends Component {
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
                <ProjectImage src={CapstoneWingXFLR5} />
                <ProjectText>
                    <ProjectTitle>Aircraft Capstone Project / Competition [2019]</ProjectTitle>
                    <ProjectInfo>
                        <P> Designed an electric single-engine aircraft comparable to the Cessna-172 Skyhawk </P>
                        <ProjectBullets>
                            <Li>
                                Winner of 2019 Competition judged by senior staff of Bombardier Inc. 
                            </Li>
                            <Li>
                                Aerodynamics sub-team lead 
                            </Li>
                            <Li>
                                Designed airfoil and wing geometry
                            </Li>
                            <Li>
                                Designed flaps and ailerons
                            </Li>
                            <Li>
                                Extensive use of XFLR5
                            </Li>
                            <Li>
                                Extensive use of ANSYS Fluent for computational fluid dynamics (CFD) analysis
                            </Li>
                        </ProjectBullets>
                    </ProjectInfo>
                    <ReadMore>Read More <BsChevronDoubleRight /></ReadMore>
                </ProjectText>
            </ProjectWrapper>
        );
    }
}

export default Capstone