import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFilm, FaUsers, FaBolt } from "react-icons/fa";

const statsData = [
  {
    icon: <FaFilm />,
    value: 100,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <FaUsers />,
    value: 10,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <FaBolt />,
    value: 2,
    suffix: "",
    label: "Years Experience",
  },
];

export default function Experience() {
  return (
    <section
      id="Experience"
      className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-[#fffeff] to-[#F9EEDF]"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Work Experience
      </motion.h2>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {statsData.map((stat, index) => (
          <StatCard key={index} stat={stat} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function StatCard({ stat, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.value;
    const duration = 1200;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="
      bg-white p-8 rounded-2xl
      shadow-md text-center
      border border-black/10
      hover:shadow-xl
      transition
    "
    >
      {/* ICON */}
      <div className="text-4xl text-[#ff7a18] mb-4 flex justify-center">
        {stat.icon}
      </div>

      {/* COUNT */}
      <h2 className="text-3xl md:text-4xl font-bold">
        {count}
        {stat.suffix}
      </h2>

      {/* LABEL */}
      <p className="text-gray-600 mt-2">{stat.label}</p>
    </motion.div>
  );
}