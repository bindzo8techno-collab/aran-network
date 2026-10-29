import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, PRODUCT_CATEGORIES } from '../constants';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
} from './icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LOGO = '/optimized/aran_logo.webp';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(
    null
  );

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll and focus trapping for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const focusableElements =
        menuPanelRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
        menuButtonRef.current?.focus();
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeAllMenus = () => {
    setIsOpen(false);
    setMobileProductsOpen(false);
    setDesktopProductsOpen(false);
    setOpenMobileCategory(null);
  };

  const handleMobileCategoryToggle = (categoryId: string) => {
    setOpenMobileCategory((prevId) => (prevId === categoryId ? null : categoryId));
  };

  const navLinkClasses = (isActive: boolean) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
      ? 'text-primary font-semibold'
      : 'text-gray-600 hover:text-primary'
    }`;

  const mobileNavLinkClasses = (isActive: boolean) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive
      ? 'bg-primary text-white'
      : 'text-gray-700 hover:bg-secondary hover:text-primary'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out-expo ${isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md'
            : 'bg-white shadow-sm'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  onClick={closeAllMenus}
                  className="text-2xl font-bold tracking-wider text-dark"
                  aria-label="Aran Network Home"
                >
                  <img src={LOGO} alt="Aran Network Logo" style={{ height: '55px' }} />
                </Link>
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-baseline space-x-4">
                {NAV_LINKS.map((link) =>
                  link.name === 'Products' ? (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setDesktopProductsOpen(true)}
                      onMouseLeave={() => setDesktopProductsOpen(false)}
                    >
                      <Link
                        href={link.path}
                        className={
                          `${navLinkClasses(pathname === link.path)} flex items-center`
                        }
                        aria-haspopup="true"
                        aria-label="View our products"
                      >
                        {link.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      </Link>
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white rounded-lg shadow-xl py-2 z-50 ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-out-expo ${desktopProductsOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                          }`}
                      >
                        {PRODUCT_CATEGORIES.map((category) => (
                          <div
                            key={category.id}
                            className="relative group/category"
                          >
                            <Link
                              href={category.path}
                              onClick={closeAllMenus}
                              className="flex justify-between items-center w-full whitespace-nowrap px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-primary transition-colors duration-200"
                              aria-label={`View ${category.name} products`}
                            >
                              {category.name}
                              <ChevronRightIcon className="h-4 w-4 ml-4" />
                            </Link>
                            <div className="absolute top-0 left-full -mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-out-expo opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible group-hover/category:translate-x-0 -translate-x-2">
                              {category.products.map((product) => (
                                <Link
                                  key={product.id}
                                  href={product.path}
                                  onClick={closeAllMenus}
                                  className="block w-full whitespace-nowrap px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-primary transition-colors duration-200"
                                  aria-label={`View ${product.name}`}
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={closeAllMenus}
                      className={navLinkClasses(pathname === link.path)}
                      aria-label={`Navigate to ${link.name} page`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </nav>
            {/* Right Side: Quick Enquiry and Mobile Burger */}
            <div className="flex items-center">
              <div className="hidden md:block">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Quick Enquiry
                </button>
              </div>

              <div className="md:hidden flex items-center ml-4">
                <button
                  ref={menuButtonRef}
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-white transition-colors duration-200"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation menu"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="block h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className={`fixed inset-0 z-[100] md:hidden ${isOpen ? '' : 'pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ease-out-expo ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          ref={menuPanelRef}
          id="mobile-menu"
          className={`relative ml-auto h-full w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-out-expo ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 id="mobile-menu-title" className="text-lg font-semibold text-dark">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <XMarkIcon className="block h-6 w-6" />
            </button>
          </div>
          <div className="overflow-y-auto p-2 flex flex-col h-[calc(100%-65px)]">
            <div className="pt-2 pb-3 space-y-1 flex-grow">
              {NAV_LINKS.map((link) =>
                link.name === 'Products' ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="w-full flex items-center justify-between text-left text-gray-700 hover:bg-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium group transition-colors duration-200"
                      aria-expanded={mobileProductsOpen}
                      aria-controls="mobile-products-submenu"
                      aria-label="Toggle products submenu"
                    >
                      <span>{link.name}</span>
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform duration-300 ease-out-expo ${mobileProductsOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <div
                      id="mobile-products-submenu"
                      className={`grid transition-[grid-template-rows] duration-300 ease-out-expo ${mobileProductsOpen
                          ? 'grid-rows-[1fr]'
                          : 'grid-rows-[0fr]'
                        }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div className="pt-1 space-y-1 pb-2">
                          <Link
                            href={link.path}
                            onClick={closeAllMenus}
                            className={
                              `block pr-3 py-2 rounded-md text-base font-medium pl-8 ${pathname === link.path
                                ? 'bg-primary text-white'
                                : 'text-gray-700 hover:bg-secondary hover:text-primary'
                              }`
                            }
                            aria-label="Navigate to All Products page"
                          >
                            All Products
                          </Link>
                          {PRODUCT_CATEGORIES.map((category) => {
                            const isCategoryOpen = openMobileCategory === category.id;
                            return (
                              <div key={category.id} className="pl-8">
                                <button
                                  onClick={() => handleMobileCategoryToggle(category.id)}
                                  className="w-full flex items-center justify-between text-left text-gray-700 hover:bg-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium group transition-colors duration-200"
                                  aria-expanded={isCategoryOpen}
                                >
                                  <span>{category.name}</span>
                                  <ChevronDownIcon
                                    className={`h-5 w-5 transition-transform duration-300 ease-out-expo ${isCategoryOpen ? 'rotate-180' : ''
                                      }`}
                                  />
                                </button>
                                <div
                                  className={`grid transition-[grid-template-rows] duration-300 ease-out-expo ${isCategoryOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}
                                >
                                  <div className="overflow-hidden min-h-0">
                                    <div className="pt-1 space-y-1 pb-1 pl-4">
                                      {category.products.map((product) => (
                                        <Link
                                          key={product.id}
                                          href={product.path}
                                          onClick={closeAllMenus}
                                          className="block pr-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-secondary hover:text-primary transition-colors duration-200"
                                        >
                                          {product.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={closeAllMenus}
                    className={mobileNavLinkClasses(pathname === link.path)}
                    aria-label={`Navigate to ${link.name} page`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
            <div className="p-4 mt-auto border-t">
              <button
                type="button"
                onClick={() => {
                  closeAllMenus();
                  onOpenEnquiry();
                }}
                className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300"
              >
                Quick Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;