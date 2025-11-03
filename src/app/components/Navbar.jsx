"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { data: session, status } = useSession();
  console.log("🛈 Session data:", session, "Status:", status);

  const handleLogout = async () => { 
    await signOut({
      redirectTo: "/"
    });
  }

  return (
   
      <nav className="fixed top-0 left-0 right-0 bg-gray-700 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Builder<span className="text-cyan-500">X</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="#features" className="hover:text-blue-500">Features</Link>
            <Link href="#howitworks" className="hover:text-blue-500">How It Works</Link>
            <Link href="#contact" className="hover:text-blue-500">Contact</Link>
            <div>
              {
                status === "unauthenticated" && ( <Link  href="/login" className="mr-4 bg-gray-800 text-white px-4 py-2 rounded-md ">Login</Link>)
             }
              {
                session?.user?.email && ( <button className=" bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleLogout}>logout</button>)
              }
           </div>
           
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-2">
            <Link href="#features" className="block" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="#howitworks" className="block" onClick={() => setMenuOpen(false)}>How It Works</Link>
            <Link href="#contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
  );
};

export default Navbar;