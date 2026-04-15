import { FaInstagram, FaWhatsapp, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="Home"
      className="
      min-h-screen w-full
      flex flex-col md:flex-row
      items-center justify-center
      gap-10 md:gap-20
      px-6 md:px-16
      pt-36 pb-16
      bg-[#f5e3cb9f]
    "
    >
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <motion.img
          src="/logo.webp"
          alt="FrameticStudio"
          className="
          w-[240px] md:w-[320px]
          rounded-full object-cover
          shadow-[0_0_25px_rgba(255,122,24,0.3)]
        "
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          whileHover={{ scale: 1.08 }}
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center md:text-left"
      >
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[2.8rem] md:text-[5rem] font-bold leading-tight"
        >
          Hi, We are{" "}
          <span className="text-[#ff7a18]">frametic</span>
          <span className="text-black">studio</span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[1.8rem] md:text-[2.5rem] font-semibold mt-2"
        >
          We create{" "}
          <span className="text-[#ff7a18] border-r-2 border-red-500 pr-1 animate-pulse">
            cinematic edits
          </span>
        </motion.h3>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-700 mt-5 max-w-[520px] leading-relaxed mx-auto md:mx-0"
        >
          We help creators and brands stand out with cinematic storytelling,
          clean typography, and high-retention edits. From YouTube videos to
          reels and real estate content — our focus is simple: keep viewers
          engaged and turn content into performance.
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4 mt-6 justify-center md:justify-start"
        >
          <motion.a
            href="https://www.instagram.com/frameticstudio"
            target="_blank"
            whileHover={{ scale: 1.2, y: -5 }}
            className="
            w-12 h-12 flex items-center justify-center
            border-2 border-[#ff7a18]
            rounded-full text-xl text-[#ff7a18]
            hover:bg-[#ff7a18] hover:text-white
          "
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://wa.me/918821811285"
            target="_blank"
            whileHover={{ scale: 1.2, y: -5 }}
            className="
            w-12 h-12 flex items-center justify-center
            border-2 border-[#ff7a18]
            rounded-full text-xl text-[#ff7a18]
            hover:bg-[#25D366] hover:text-white
          "
          >
            <FaWhatsapp />
          </motion.a>
        </motion.div>

        {/* BUTTON */}
        <motion.a
          href="#Projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="
            mt-8 flex items-center gap-3
            bg-[#ff7a18] text-white
            px-6 py-3 rounded-lg
            hover:bg-[#e66a10]
            mx-auto md:mx-0
          "
          >
            <FaPlay />
            View Our Work
          </motion.button>
        </motion.a>
      </motion.div>
    </section>
  );
}