import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY_INFO } from '@/utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                className="w-12 h-12"
                src="/assets/Since_1999_20250918_230702_0000__1_-removebg-preview.png"
                alt="Sun Star logo"
              />
              <div>
                <h3 className="font-bold text-lg">{COMPANY_INFO.NAME}</h3>
                <p className="text-sm text-gray-400">{COMPANY_INFO.TAGLINE}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Leading elevator solutions provider in Bangladesh since 1999. Quality, safety, and customer satisfaction guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-orange-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Elevator Installation</li>
              <li className="text-gray-400">Maintenance & Repair</li>
              <li className="text-gray-400">Customization</li>
              <li className="text-gray-400">Modernization</li>
              <li className="text-gray-400">24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0 text-orange-400" />
                <div className="text-gray-400 text-sm">
                  {COMPANY_INFO.PHONE.map((phone, index) => (
                    <div key={index}>{phone}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-orange-400" />
                <a
                  href={`mailto:${COMPANY_INFO.EMAIL}`}
                  className="text-gray-400 text-sm hover:text-orange-400 transition"
                >
                  {COMPANY_INFO.EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-orange-400" />
                <p className="text-gray-400 text-sm">{COMPANY_INFO.ADDRESS}</p>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} {COMPANY_INFO.NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
