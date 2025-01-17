import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
    return (
      <header className="max-w-screen-xl mx-auto px-4 h-[100px] bg-white">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/mh.png"
              alt="image-1"
              width={50}
              height={41}
              className="w-[50px] h-[41px]"
            />
            <h2 className="text-[28px] md:text-[34px] font-bold text-black ml-2">
              Furniro
            </h2>
          </div>
  
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-base font-semibold hover:text-gray-600">
              Home
            </Link>
            <Link href="/shop" className="text-base font-semibold hover:text-gray-600">
              Shop
            </Link>
            <Link href="/blog" className="text-base font-semibold hover:text-gray-600">
              Blog
            </Link>
            <Link href="/contact" className="text-base font-semibold hover:text-gray-600">
              Contact
            </Link>
          </nav>
  
          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <i className="bi bi-person-exclamation text-2xl"></i>
            <i className="bi bi-search text-2xl"></i>
            <i className="bi bi-heart text-2xl"></i>
            <i className="bi bi-cart3 text-2xl"></i>
          </div>
  
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="text-2xl">
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
  
        {/* Mobile Navigation */}
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link href="/" className="text-base font-semibold hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-base font-semibold hover:text-gray-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-base font-semibold hover:text-gray-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-base font-semibold hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }