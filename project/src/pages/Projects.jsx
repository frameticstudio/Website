import { motion } from "framer-motion";

const portraitVideos = [
  {
    src: "https://res.cloudinary.com/drnie4sny/video/upload/v1780058676/Motion_graphic_02_o0hqvc.mp4",
    title: "Motion Graphics",
  },
  {
    src: "https://res.cloudinary.com/drnie4sny/video/upload/v1780059563/Documentary_n6qg8p.mp4",
    title: "Documentary",
  },
  {
    src: "https://res.cloudinary.com/drnie4sny/video/upload/v1780057619/Tyopgraphy_mpf9nh.mp4",
    title: "Typography",
  },
  {
    src: "https://res.cloudinary.com/drnie4sny/video/upload/v1780058649/Motion_Graphics_fu6qrq.mp4",
    title: "Motion Graphics",
  },
  {
    src: "https://res.cloudinary.com/drnie4sny/video/upload/v1780058554/Realstate_k8hgpv.mp4",
    title: "Real Estate",
  },
  {
    src: "https://res.cloudinary.com/drnie4sny/video/upload/v1780060588/Realstate_02_khdlos.mp4",
    title: "Real Estate",
  },
];

const cinematicVideos = [
  "https://res.cloudinary.com/drnie4sny/video/upload/v1780057149/Cinematic_03_dwm8kc.mp4",
  "https://res.cloudinary.com/drnie4sny/video/upload/v1780057086/Cinematic_hh1wr2.mp4",
  "https://res.cloudinary.com/drnie4sny/video/upload/v1780059281/Cinematic_02_1_tnxfdp.mp4",
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