export const componentsLibrary = [
  
  {
    id: "navbar",
    name: "Navbar",
    component: () => (
      <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">BuilderX</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">Courses</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    ),
  },


  {
    id: "hero",
    name: "Hero Section",
    component: () => (
      <section className="p-16 text-center bg-gradient-to-r from-blue-100 to-indigo-100">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
          Build Beautiful Websites — Without Code!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Drag, drop, and design your dream project in minutes.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    ),
  },


  {
    id: "features",
    name: "Features Section",
    component: () => (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {[
            { title: "Drag & Drop Builder", desc: "Easily build pages with our visual editor." },
            { title: "Responsive Design", desc: "Looks perfect on every device automatically." },
            { title: "Prebuilt Sections", desc: "Choose from a wide library of templates." },
          ].map((f, i) => (
            <div key={i} className="border p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    ),
  },


  {
    id: "courses",
    name: "Courses Section",
    component: () => (
      <section className="py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
          {["Next.js Mastery", "React Essentials", "Tailwind Design"].map((course, i) => (
            <div key={i} className="bg-gray-500 rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{course}</h3>
              <p className="text-gray-300 mb-4">
                Learn {course} from scratch with practical projects.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>
    ),
  },

  
  {
    id: "testimonials",
    name: "Testimonials",
    component: () => (
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-8">
          {[
            { name: "Sara Khan", text: "BuilderX made my course site in hours!" },
            { name: "Rohit Das", text: "Super intuitive and flexible builder!" },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/3">
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <p className="font-semibold text-blue-600">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    ),
  },


  {
    id: "pricing",
    name: "Pricing Section",
    component: () => (
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-10">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-8">
          {[
            { title: "Basic", price: "$9/mo", features: ["1 Project", "Email Support"] },
            { title: "Pro", price: "$29/mo", features: ["10 Projects", "Priority Support"] },
            { title: "Enterprise", price: "$99/mo", features: ["Unlimited", "Dedicated Manager"] },
          ].map((p, i) => (
            <div key={i} className="border rounded-xl p-6 shadow hover:shadow-lg transition w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-3xl font-extrabold mb-4">{p.price}</p>
              <ul className="text-gray-300 mb-6 space-y-1">
                {p.features.map((f, i) => (
                  <li key={i}> {f}</li>
                ))}
              </ul>
              <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 cursor-pointer transition">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>
    ),
  },

  {
    id: "contact",
    name: "Contact Section",
    component: () => (
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>
    ),
  },

  {
    id: "footer",
    name: "Footer",
    component: () => (
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>© 2025 BuilderX. All rights reserved.</p>
      </footer>
    ),
  },
];
