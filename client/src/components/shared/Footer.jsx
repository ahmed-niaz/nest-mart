import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { Facebook, Headset, Instagram, MailPlus, MapPinHouse, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black p-10">
      <div className="footer grid grid-cols-2 md:grid-cols-4 gap-10">
        <aside>
          <Link to="/" className="flex flex-col font-cinzel items-start">
            <img src={logo} alt="NestMart Logo" className="w-48 h-auto mb-4" />
          </Link>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
            <MailPlus />
              <span>info@nestmart.com</span>
            </div>
            <div className="flex items-center gap-3">
            <Headset />
              <span>+910 468 582 552</span>
            </div>
            <div className="flex items-center gap-3">
            <MapPinHouse />
              <span>Block L, Road 4, Aftabnagar, Dhaka</span>
            </div>
          </div>
        </aside>

        <nav>
          <h6 className="text-lg font-semibold mb-4">Information</h6>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About us</Link></li>
            <li><Link to="/" className="hover:underline">Digital Payment</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </nav>

        <nav>
          <h6 className="text-lg font-semibold mb-4">Customer Care</h6>
          <ul className="space-y-2">
            <li><Link className="hover:underline">Help Center</Link></li>
            <li><Link className="hover:underline">How to buy</Link></li>
            <li><Link  className="hover:underline">Return & Refunds</Link></li>
            <li><Link  className="hover:underline">Term & Conditions</Link></li>
          </ul>
        </nav>

        <nav>
          <h6 className="text-lg font-semibold mb-4">Social</h6>
          <ul className="space-y-2">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
              <Facebook />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
              <Instagram />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
              <Youtube />
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-10 border-t border-white pt-4 text-center">
        <span>© Copyright 2024 NestMart. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
