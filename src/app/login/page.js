import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-gray-700 to-slate-900 p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back </h2>
        <p className="text-sm text-gray-300 text-center mb-8">
          Sign in to continue building with <span className="text-cyan-400 font-semibold">BuilderX</span>
        </p>

        <form
          action={async (formData) => {
            "use server";
            
              const res = await signIn("credentials", {
                email: formData.get("email"),
                password: formData.get("password"),
                redirectTo: "/builder",
              });
              console.log(" Sign-in success:", res);
            
          }}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg font-semibold text-white shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Don’t have an account?{" "}
          <a href="/signup" className="text-cyan-400 hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
