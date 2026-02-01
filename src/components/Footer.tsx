import React from 'react';

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Shopify ROI Calculator. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-6 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
