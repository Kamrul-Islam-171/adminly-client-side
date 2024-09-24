import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap justify-between  gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-3xl font-bold text-blue-400 mb-4">Adminly</h3>
            <p className="text-gray-400 mb-4">
              Your ultimate platform for managing users efficiently.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/settings" className="hover:text-blue-400">Settings</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-blue-400">Profile</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-400">Login</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-700 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Adminly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
