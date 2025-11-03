
export const componentsLibrary = [
  {
    id: "navbar",
    name: "Navbar",
    component: () => (
      <nav className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">My Website</h1>
      </nav>
    ),
  },
  {
    id: "hero",
    name: "Hero Section",
    component: () => (
      <section className="p-12 text-center bg-blue-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to BuilderX</h1>
        <p className="text-lg text-gray-700">Build your site visually!</p>
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
