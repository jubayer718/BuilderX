import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10 px-6 mt-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">BuilderX</h3>
            <p className="text-sm text-gray-200">
              Create your online marketplace easily — no coding required.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#features" className="hover:underline">Features</Link></li>
              <li><Link href="#howitworks" className="hover:underline">How It Works</Link></li>
              <li><Link href="/login" className="hover:underline">Login</Link></li>
              <li><Link href="/signup" className="hover:underline">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-200">📧 support@builderx.com</p>
            <p className="text-sm text-gray-200">📞 +8801XXXXXXXXX</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-300 mt-8">
          © {new Date().getFullYear()} BuilderX. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;