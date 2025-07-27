import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const scrollToSection = (id) => {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; 
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, 100);
};


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownClick = (page, sectionId) => (e) => {
    e.preventDefault();
    closeAll();
    if (location.pathname === page) {
      scrollToSection(sectionId);
    } else {
      navigate(`${page}#${sectionId}`);
      setTimeout(() => scrollToSection(sectionId), 200);
    }
  };

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash.replace('#', ''));
    }
  }, [location]);

  const Dropdown = ({ label, id, links }) => (
    <li
      className="relative group"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        aria-haspopup="true"
        aria-expanded={openDropdown === id}
        className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700 focus:outline-none"
      >
        {label}
        <FaChevronDown size={12} className="mt-[2px]" />
      </button>

      {links.length > 0 && (
        <ul
          className={`absolute top-full left-0 mt-0 bg-white text-sm text-gray-700 shadow-lg rounded-md min-w-[180px] z-10 ${
            openDropdown === id ? 'block' : 'hidden'
          }`}
        >
          {links.map(({ text, href, page }) => (
            <li key={href}>
              <a
                href={`#${href}`}
                onClick={handleDropdownClick(page, href)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );


  const navDropdowns = [
    {
      label: 'Home',
      id: 'home',
      links: [
        { text: 'Hero Section', href: 'hero', page: '/' },
        { text: 'Lender Borrower Section', href: 'lender', page: '/' },
        { text: 'AISafety Section', href: 'ai-safety', page: '/' },
        { text: 'Offers & Data', href: 'offers', page: '/' },
        { text: 'Testimonials', href: 'testimonials', page: '/' },
        { text: 'Loan Types', href: 'loanTypes', page: '/' },
        { text: 'FAQs', href: 'faq', page: '/' },
        { text: 'Steps to Apply', href: 'steps', page: '/' },
      ],
    },
    {
      label: 'Borrower',
      id: 'borrower',
      links: [
        { text: 'Hero Section', href: 'borrower-hero', page: '/borrower' },
        { text: 'Loan Categories', href: 'categories', page: '/borrower' },
        { text: 'Cash Loan Enrollment', href: 'enroll', page: '/borrower' },
        { text: 'AI Safety', href: 'ai-safety', page: '/borrower' },
        { text: 'Benefits', href: 'benefits', page: '/borrower' },
        { text: 'FAQs', href: 'borrower-faqs', page: '/borrower' },
        { text: 'Testimonials', href: 'borrower-testimonials', page: '/borrower' },
      ],
    },
    {
      label: 'Lender',
      id: 'lender',
      links: [{ text: 'Lender Section', href: 'lender', page: '/lender' }],
    },
    {
      label: 'Loans',
      id: 'loans',
      links: [{ text: 'Loan Section', href: 'loans', page: '/loans' }],
    },
    {
      label: 'About',
      id: 'about',
      links: [{ text: 'About Section', href: 'about', page: '/about' }],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <span
  className="text-2xl font-bold text-blue-700 cursor-pointer"
  onClick={() => {
    closeAll();
    if (location.pathname === '/') {
      
      window.location.reload();
    } else {
      navigate('/');
    }
  }}
>
  Kathakal
</span>


      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={`md:flex md:items-center gap-6 md:static absolute top-[72px] right-6 bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 rounded-md md:rounded-none border md:border-none transition-all duration-300 ease-in-out ${
          menuOpen ? 'flex flex-col' : 'hidden'
        }`}
      >
        {navDropdowns.map((dropdown) => (
          <Dropdown key={dropdown.id} {...dropdown} />
        ))}

        <li>
          <Link
            to="/signup"
            onClick={closeAll}
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            Signup/Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
