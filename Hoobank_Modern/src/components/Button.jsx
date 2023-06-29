import React from "react";
import { motion } from "framer-motion";

const Button = ({ styles }) => (
  <motion.button type="button" 
  whileTap={{ scale: 0.85 }}
  transition={{duration: 0.2}}
  className={`py-4 px-6 font-poppins font-medium text-[18px] 
  text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </motion.button>
);

export default Button;
