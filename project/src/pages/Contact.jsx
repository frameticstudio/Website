import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi, I'm ${form.name}%0A${form.message}`;
    const whatsappUrl = `https://wa.me/918821811285?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="Contact"
      className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-[#fff5e3] via-[#fff0db] to-[#fff7ee] text-[#111]"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        Let's Work Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-[#605b54] mt-3 mb-16"
      >
        Have a project in mind? Let’s create something amazing 🚀
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/95 text-[#111] p-8 rounded-2xl shadow-lg border border-[#ffddc2]"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mb-4 p-3 border border-[#e2c4a3] rounded-lg bg-[#fff8f2] outline-none focus:border-[#ff7a18]"
          />

          <textarea
            placeholder="Your Message"
            required
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full mb-4 p-3 border border-[#e2c4a3] rounded-lg bg-[#fff8f2] outline-none focus:border-[#ff7a18]"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="
            w-full flex items-center justify-center gap-2
            bg-[#ff7a18] text-white py-3 rounded-lg
            hover:bg-[#e66a10] transition
          "
          >
            <FaPaperPlane />
            Send via WhatsApp
          </motion.button>
        </motion.form>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6 justify-center"
        >
          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#ff7a18] text-xl" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p>frameticstudio.media@gmail.com</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#ff7a18] text-xl" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p>India</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

            <div className="flex gap-4">
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
          </div>
        </motion.div>
      </div>

      {/* AVAILABILITY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="
        mt-16 bg-white/95 text-[#111]
        p-6 rounded-xl text-center
        max-w-[600px] mx-auto
        shadow-md
      "
      >
        <h4 className="text-xl font-bold mb-2">Availability</h4>
        <p className="text-gray-600">
          Currently accepting new projects. Typical turnaround time is 24–48 hours.
        </p>
      </motion.div>
    </section>
  );
}