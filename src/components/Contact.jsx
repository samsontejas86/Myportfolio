// Top of file
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-300 dark:bg-[#111] z-50"
    >
      <div className="max-w-6xl w-full bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          Need to contact me? Please Drop a Message
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
          Leave a message for me, I will get in touch ASAP.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left text-gray-800 dark:text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-3">Address:</h3>
            <p className="mb-6">
              Near railway station road, Vizianagaram 535002, Andhra Pradesh, India
            </p>

            <h3 className="text-xl font-semibold mb-3">Phone:</h3>
            <p className="mb-1">(+91) 9052484046</p>

            <h3 className="text-xl font-semibold mb-3">Email:</h3>
            <p className="mb-1">samsontejas.p@gmail.com</p>

            <h3 className="text-xl font-semibold mb-3">Follow Me:</h3>
            <div className="flex gap-4 flex-wrap text-2xl">
              <a href="https://facebook.com/sammmy.x._" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="text-blue-600 dark:text-blue-400 hover:scale-110 transition transform">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="text-blue-600 dark:text-blue-400 hover:scale-110 transition transform">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/in/samsontejas86" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-blue-600 dark:text-blue-400 hover:scale-110 transition transform">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/sammmy.x._" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-pink-500 dark:text-pink-400 hover:scale-110 transition transform">
                <FaInstagram />
              </a>
            </div>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input name="name" aria-label="Name" type="text" placeholder="Name (e.g samantha)" required
              className="p-3 rounded border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input name="email" aria-label="Email" type="email" placeholder="Email (e.g sam@mail.com)" required
              className="p-3 rounded border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input name="phone" aria-label="Phone" type="tel" placeholder="Phone Number" required
              className="p-3 rounded border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea name="message" aria-label="Message" placeholder="Write message..." rows="5" required
              className="p-3 rounded border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
