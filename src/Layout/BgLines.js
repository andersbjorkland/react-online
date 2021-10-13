import {motion} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.svg)`
    position: fixed;
    z-index: -1;

    overflow: visible;
    stroke-width: 1;
    stroke-linejoin: round;
    stroke-linecap: round;
`;

const BgLines = () => {
    return (
        <Wrapper 
            width="1440" height="1024" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path 
                id="wave-1"
                d="M130 1041C600.5 161 986 583 1455.5 71" 
                stroke="url(#paint0_linear)"
                initial={{
                    opacity: 0,
                    pathLength: 0,
                }}
                animate={{
                    opacity: 0.2,
                    pathLength: 1,
                }}
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                }}
            />
            <motion.path 
                id="wave-2"
                width="1200"
                d="M1288.57 -6.9397C858.266 598.353 401.358 300.718 -13.3003 856.662" 
                stroke="url(#paint0_linear)"
                initial={{
                    opacity: 0,
                    pathLength: 0,
                }}
                animate={{
                    opacity: 0.2,
                    pathLength: 1,
                }}
                transition={{
                    default: { duration: 2, ease: "easeInOut", delay: 0.1 },
                }}
            />
            <motion.path 
                id="wave-3"
                width="1200"
                d="M1155.57 -16.1926C819.929 588.329 397.446 352.38 -29.7303 728.664" 
                stroke="url(#paint0_linear)"
                initial={{
                    opacity: 0,
                    pathLength: 0,
                }}
                animate={{
                    opacity: 0.2,
                    pathLength: 1,
                }}
                transition={{
                    default: { duration: 2, ease: "easeInOut", delay: 0.2 },
                }}
            />
            <motion.path 
                id="wave-4"
                width="1200"
                d="M-17.9946 1053.29C474.902 208.19 925.55 609.919 1438.79 -11.5659" 
                stroke="url(#paint0_linear)"
                initial={{
                    opacity: 0,
                    pathLength: 0,
                }}
                animate={{
                    opacity: 0.2,
                    pathLength: 1,
                }}
                transition={{
                    default: { duration: 2, ease: "easeInOut", delay: 0.3 },
                }}
            />
            <motion.path 
                id="wave-5"
                width="1200"
                d="M1073 -7.5C745.657 540.326 513.5 389 -1.50012 624" 
                stroke="url(#paint0_linear)"
                initial={{
                    opacity: 0,
                    pathLength: 0,
                }}
                animate={{
                    opacity: 0.2,
                    pathLength: 1,
                }}
                transition={{
                    default: { duration: 2, ease: "easeInOut", delay: 0.4 },
                }}
            />
            <defs>
                <linearGradient id="paint0_linear" x1="-201.5" y1="997" x2="1315.5" y2="-16" gradientUnits="userSpaceOnUse">
                    <stop offset="0.015625" stopColor="#4E044B"/>
                    <stop offset="0.654947" stopColor="#F98AF5"/>
                    <stop offset="1" stopColor="#4E044B"/>
                </linearGradient>
            </defs>
        </Wrapper>
    );
}

export default BgLines;