import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-300 dark:bg-[#111] z-50"
    >
      <div className="max-w-6xl w-full bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-8 md:p-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          Need to contact me? Please Drop a Message
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
          Leave a message for me, I will get in touch ASAP.
        </p>

        {/* Split Section */}
        <div className="grid md:grid-cols-2 gap-10 text-left text-gray-800 dark:text-gray-300">
          {/* Left - Contact Info */}
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
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:scale-110 transition transform"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:scale-110 transition transform"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:scale-110 transition transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 dark:text-pink-400 hover:scale-110 transition transform"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Name (e.g samantha)"
              className="p-3 rounded border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Email (e.g sam@mail.com)"
              className="p-3 rounded border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Write message..."
              rows="5"
              className="p-3 rounded border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
