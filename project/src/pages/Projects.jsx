import { motion } from "framer-motion";

const portraitVideos = [
  {
    src: "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776262117/Motion_graphic_02_dwajjs.mp4",
    title: "Motion Graphics",
  },
  {
    src: "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776264374/Documentary_r1hs5z.mp4",
    title: "Documentary",
  },
  {
    src: "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776261512/Tyopgraphy_uqn5ua.mp4",
    title: "Typography",
  },
  {
    src: "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776267342/Motion_Graphics_in1lhd.mp4",
    title: "Motion Graphics",
  },
  {
    src: "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776264610/Realstate_02_qmuzbk.mp4",
    title: "Real Estate",
  },
  {
    src: "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776262024/Realstate_ab9hyt.mp4",
    title: "Real Estate",
  },
];

const cinematicVideos = [
  "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776267600/Cinematic_02_ovw5u7.mp4",
  "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776267976/Cinematic_03_tt5tm8.mp4",
  "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776262155/Cinematic_xt6g8h.mp4",
  "https://res.cloudinary.com/dkptyzv1h/video/upload/v1776262730/Ashi_s_final_reel_y8ggoe.mp4",
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-[#F9EEDF] to-[#ffd2b8]"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-16"
      >
        OUR PROJECTS
      </motion.h2>

      {/* PORTRAIT GRID */}
      <div className="grid grid-cols-2  md:grid-cols-3 gap-6">
        {portraitVideos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group rounded-xl overflow-hidden"
          >
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover aspect-[9/16]"
            />

            {/* OVERLAY */}
            <div
              className="
              absolute inset-0
              bg-black/40 opacity-0
              group-hover:opacity-100
              transition duration-300
              flex items-center justify-center
            "
            >
              <span className="text-white text-lg font-semibold">
                {video.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CINEMATIC TITLE */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl font-bold text-center mt-20 mb-10"
      >
        CINEMATIC EDITS
      </motion.h3>

      {/* YOUTUBE STYLE VIDEOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cinematicVideos.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="
            bg-white p-1 rounded-lg
            border border-black/10
            shadow-sm
          "
          >
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}