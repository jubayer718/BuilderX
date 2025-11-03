"use client";
import { useState } from "react";
import Link from "next/link";
import heroImage from "../../public/img1.webp";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session, status } = useSession();
  console.log("🛈 Session data:", session, "Status:", status);

  const handleLogout = async () => { 
    await signOut({
      redirectTo: "/"
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Builder<span className="text-cyan-500">X</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
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

      {/* ✅ Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-24 px-6 py-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Marketplace <span className="text-blue-600">Without Coding</span>
          </h1>
          <p className="text-gray-600 text-lg">
            BuilderX helps you create your own online platform effortlessly with a simple drag & drop interface.
          </p>
           <Link
              href="/builder"
              className=" bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
            >
              Get Started
            </Link>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src={heroImage}
            alt="BuilderX Hero Image"
             className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* ✅ Features Section */}
      <section id="features" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Drag & Drop", desc: "Easily design your website with a simple visual editor." },
              { title: "Live Preview", desc: "See your changes in real time before publishing." },
              { title: "Custom Components", desc: "Use pre-built components like Navbar, Hero, and more." },
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ How It Works */}
      <section id="howitworks" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { step: "1️⃣ Sign Up", desc: "Create your BuilderX account easily." },
              { step: "2️⃣ Choose Template", desc: "Select from ready-to-use layouts and components." },
              { step: "3️⃣ Launch", desc: "Deploy your platform instantly and share it with the world!" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer id="contact" className="bg-blue-600 text-white py-10 px-6 mt-auto">
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
    </div>
  );
}
