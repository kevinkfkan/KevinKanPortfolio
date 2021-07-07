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

import SpotifyImg from "../../../assets/images/projects/spotify.png";

export class Spotify extends Component {
    render() {
        const P  = styled.p`
        font-size: 16px;
        font-weight: bold;
    `;
    const Li = styled.li`

    `;
        return (
            <ProjectWrapper href="https://github.com/kevinkfkan/SpotifyPlaylistGenerator" target="_blank">
            <ProjectImage src={SpotifyImg} />
            <ProjectText>
                <ProjectTitle>Spotify Playlist Generator [2021]</ProjectTitle>
                <ProjectInfo>
                    <P> Spotify playlist generator that recommends tracks for a given playlist using machine learning </P>
                    <ProjectBullets>
                        <Li>
                            Written using Python 3 in Jupyter Notebook
                        </Li>
                        <Li>
                            pandas (python data analysis library) used for data handling
                        </Li>
                        <Li>
                            Spotify for Developers used for token authentication and client credentials
                        </Li>
                        <Li>
                            Spotify API used for user playlist information, track audio features, etc.
                        </Li>
                        <Li>
                            Machine learning algorithms (Random Forest Classifier and k-Nearest Neighbor) implemented using scikit-learn
                        </Li>
                    </ProjectBullets>
                </ProjectInfo>
                <ReadMore>Read More <BsChevronDoubleRight /></ReadMore>
            </ProjectText>
        </ProjectWrapper>
        )
    }
}

export default Spotify
