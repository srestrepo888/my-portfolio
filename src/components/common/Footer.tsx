import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import UnifiedButton from './UnifiedButton';

const Footer: React.FC = () => {
  const navigationLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' }
  ];

  const socialLinks = [
    { 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/silvanarestrepo',
      icon: 'in'
    },
    { 
      label: 'Email', 
      href: 'mailto:silvanarestrepo888@gmail.com',
      icon: '@'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-background-cream pt-20 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl text-primary-dark mb-4">
              silvana.
            </h3>
            <p className="text-primary-gray text-body mb-6 max-w-md">
              "Transforming business vision into human experiences—where strategic design meets 
              operational excellence and technological possibility".
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-primary-dark mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-primary-gray hover:text-primary-coral transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://silvana.mmm.page/human-perspective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-gray hover:text-primary-coral transition-colors duration-300"
                >
                  MyVoice
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-primary-dark mb-4">Let's Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-gray hover:text-primary-coral transition-colors duration-300"
                  >
                    <span className="w-8 h-8 bg-primary-coral/10 rounded-full flex items-center justify-center text-primary-coral font-bold text-sm">
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <UnifiedButton
                variant="primary"
                size="md"
                className="w-full"
              >
                Let's Work Together
              </UnifiedButton>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-primary-gray/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-gray">
            © 2025 Silvana Restrepo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              href="/privacy"
              className="text-sm text-primary-gray hover:text-primary-coral transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link 
              href="/terms"
              className="text-sm text-primary-gray hover:text-primary-coral transition-colors duration-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;