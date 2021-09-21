import { motion } from "framer-motion";
import { colorOptions } from "../Layout/colorOptions";

const getColor = (color) => {
    if (Object.keys(colorOptions).includes(color)) {
        return colorOptions[color];
    } else {
        return "#FECDFC";
    }
}

const SimpleTriangle = ({active, color}) => (
    <svg 
        width="13" 
        height="15" 
        viewBox="0 0 13 15" 
        strokeWidth="2"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
 
        <motion.path 
            d="M0.749998 1.00481L12 7.5L0.749997 13.9952L0.749998 1.00481Z" 
            animate={{
                stroke: active ? getColor(color) : "#2E2E2E",
                transition: {duration: 0.3}
            }}
        />
    </svg>
);

export default SimpleTriangle;