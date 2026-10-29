import React, { useEffect, useState } from 'react';
import { NAV_LINKS, CONTACT_INFO, PRODUCT_CATEGORIES } from '../constants';
import Link from 'next/link';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  WhatsAppIcon,
} from './icons';
const LOGO = '/optimized/logo_aran_footer.webp';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    const timer = window.setTimeout(
      () => setCurrentYear(new Date().getFullYear()),
      0
    );
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white tracking-wider">
              <img src={LOGO} alt="Aran Network" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-gray-400">
              Your trusted partner in building secure, smart, and connected
              environments. We deliver cutting-edge technology with
              unparalleled service.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              {CONTACT_INFO.whatsapp && (
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(
                    /\s/g,
                    ''
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Products
            </h4>
            <ul className="mt-4 space-y-2">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Contact Us
            </h4>
            <div className="mt-4 space-y-4 text-gray-400">
              <p>
                <span className="font-semibold text-white">Address:</span>
                <br />
                {CONTACT_INFO.address}
              </p>
              <p>
                <span className="font-semibold text-white">Mobile:</span>
                <br />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              {CONTACT_INFO.whatsapp && (
                <p>
                  <span className="font-semibold text-white">WhatsApp:</span>
                  <br />
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(
                      /\s/g,
                      ''
                    )}`}
                    className="hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT_INFO.whatsapp}
                  </a>
                </p>
              )}
              <p>
                <span className="font-semibold text-white">Email:</span>
                <br />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>
            &copy; {currentYear} Aran Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;