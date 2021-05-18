import { keyframes } from "styled-components";

const flash = keyframes`
    0% {
        opacity: .1;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: .1;
    }
    `;

export { flash };
