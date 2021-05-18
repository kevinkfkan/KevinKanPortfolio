import { keyframes } from "styled-components";

export const bounce = keyframes`
    0% {
        transform: translateY(0rem);
        opacity: 1;
    }
    50% {
        transform: translateY(.5rem);
        opacity: .3;
    }
    100% {
        transform: translateY(0rem);
        opacity: 1;
    }
`;