import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c0c0c] text-white pt-16 pb-8 px-6 md:px-16 relative overflow-hidden">
      
      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-[300px] h-[300px] bg-[#ff7a18]/20 blur-[120px] absolute top-[-100px] left-[-100px]" />
        <div className="w-[300px] h-[300px] bg-[#ff7a18]/10 blur-[120px] absolute bottom-[-100px] right-[-100px]" />
      </div>

      {/* MAIN GRID */}
      <div className="relative grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold">
            <span className="text-[#ff7a18]">frametic</span>studio
          </h2>

          <p className="text-gray-400 mt-4 max-w-[300px]">
            We create cinematic edits that keep viewers engaged and turn content
            into performance.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/frameticstudio/"
              target="_blank"
              className="
              w-10 h-10 flex items-center justify-center
              border border-[#ff7a18] rounded-full
              text-[#ff7a18]
              hover:bg-[#ff7a18] hover:text-white
              transition
            "
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/918821811285"
              target="_blank"
              className="
              w-10 h-10 flex items-center justify-center
              border border-[#ff7a18] rounded-full
              text-[#ff7a18]
              hover:bg-[#25D366] hover:text-white
              transition
            "
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            {["Home", "Projects", "Services", "Experience", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-[#ff7a18] transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Start Your Project 🚀
          </h3>

          <p className="text-gray-400 mb-6">
            Let’s create something amazing together.
          </p>

          <a
            href="https://wa.me/918821811285"
            target="_blank"
          >
            <button
              className="
              bg-[#ff7a18] px-6 py-3 rounded-full
              hover:bg-[#e66a10]
              hover:scale-105
              transition
            "
            >
              Get Started
            </button>
          </a>
        </motion.div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FrameticStudio. All rights reserved.
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
        fixed bottom-6 right-6
        bg-[#ff7a18] text-white
        w-12 h-12 rounded-full
        flex items-center justify-center
        shadow-lg
        hover:scale-110
        transition
      "
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}