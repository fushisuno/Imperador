import { motion } from "framer-motion";

export function BeerMug() {
  return (
    <motion.div
      className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[650px] lg:h-[650px] cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src="/copos_chopp_hero.png"
        alt="Imperador do Chopp - Copos de chopp premium"
        className="w-full h-full object-contain"
        style={{
          filter: "brightness(1.1) contrast(1.05) saturate(1.1) drop-shadow(0 0 50px rgba(200,146,30,0.5))",
        }}
      />
    </motion.div>
  );
}