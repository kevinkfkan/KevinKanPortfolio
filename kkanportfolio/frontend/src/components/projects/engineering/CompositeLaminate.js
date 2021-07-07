import React, { Component } from "react";

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

import CapstoneWingXFLR5 from "../../../assets/images/projects/CapstoneWingXFLR5.png";

export class CompositeLaminate extends Component {
    render() {
        const P = styled.p`
        font-size: 16px;
        font-weight: bold;
        `;
        const Ul = styled.ul``;
        const Li = styled.li``;
        return (
            <ProjectWrapper>
                <ProjectImage src='https://ae01.alicdn.com/kf/HLB1VcmnQmzqK1RjSZFpq6ykSXXal/HOBBY-CARBON-1000x1000-1pc-3K-pure-Carbon-fiber-twill-matte-sheets-plate.jpg' />
                <ProjectText>
                    <ProjectTitle>Composite Laminate Design [2019]</ProjectTitle>
                    <ProjectInfo>
                        <P> Designed and manufactured a multi-ply carbon fiber composite </P>
                        <ProjectBullets>
                            <Li>
                                Using MATLAB, designed multi-ply laminate to withstand stresses from longitudinal and transverse directions  
                            </Li>
                            <Li>
                                Manufactured composite laminate using carbon fiber and epoxy resin
                            </Li>
                            <Li>
                                MATLAB used to calculate theoretical stress calculations in multiple directions
                            </Li>
                            <Li>
                                Experimental stress tests applied using strain guage to compare with theoretical values
                            </Li>
                        </ProjectBullets>
                    </ProjectInfo>
                    <ReadMore>Read More <BsChevronDoubleRight /></ReadMore>
                </ProjectText>
            </ProjectWrapper>
        );
    }
}

export default CompositeLaminate
