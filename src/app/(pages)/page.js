"use client";

import Link from "next/link";
import heroImage from "../../../public/img1.webp"
import Image from "next/image";


export default function Home() {


  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
     

      {/*  Hero Section */}
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

      {/*  Features Section */}
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

      {/*  How It Works */}
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

  
     
    </div>
  );
}
