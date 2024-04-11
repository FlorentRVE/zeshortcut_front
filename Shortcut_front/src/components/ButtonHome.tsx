import { motion } from "framer-motion";

function Button({ text }: { text: string }) {
  return (
    <motion.button
      className="text-2xl bg-green-400 rounded-xl px-4 py-2 w-1/3 hover:scale-105"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {text}
    </motion.button>
  );
}

export default Button;
