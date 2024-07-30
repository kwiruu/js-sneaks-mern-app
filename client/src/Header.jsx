import { useState, useContext } from 'react';
import logo from '/js-logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <header className="border-b border-gray-400 p-4 pt-2 flex justify-between items-center text-sm relative z-10">
      {/* Left Menu for Desktop */}
      <div className="hidden md:flex items-center gap-10">
        <Link to={'/'} className="font-medium flex items-center">
          Home
        </Link>
        <Link to={'/about'} className="font-medium flex items-center">
          Contact Us
        </Link>
      </div>

      {/* Logo */}
      <Link to={'/'} className="flex items-center gap-1 font-bold text-xl">
        <img style={{ width: '100px', height: 'auto' }} src={logo} alt="js-logo" />
      </Link>

      {/* Right Menu for Desktop */}
      <div className="hidden md:flex items-center gap-10">
        <Link to={'/search'} className="font-medium flex items-center">
          Search
        </Link>
        <Link to={user ? '/account' : '/login'} className="flex items-center gap-1">
          {!user && <p className="font-medium">Login</p>}
          {!!user && <div className="font-medium">{user.name.split(' ')[0]}</div>}
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden flex items-center p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 mt-16 bg-white border border-gray-400 w-64 p-4 z-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link to={'/'} className="block py-2 font-medium">
          Home
        </Link>
        <Link to={'/about'} className="block py-2 font-medium">
          Contact Us
        </Link>
        <Link to={'/search'} className="block py-2 font-medium">
          Search
        </Link>
        <Link to={user ? '/account' : '/login'} className="block py-2 font-medium">
          {!user ? 'Login' : user.name.split(' ')[0]}
        </Link>
      </div>
    </header>
  );
}
