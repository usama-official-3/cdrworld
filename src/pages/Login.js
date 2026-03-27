import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, AlertCircle, Loader } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message || "Failed to sign in");
      setLoading(false);
    } else {
      navigate("/");
    }
  };

  return (

    <>
     {/* SEO with structured data */}
      <SEO
        title="Login | CDR World"
        description="Sign in to your CDR World account to access free and premium CorelDRAW (CDR) files. Secure login for designers and businesses."
        keywords="CDR World login, CorelDRAW account, CDR files access, vector design login"
        canonical="https://cdrworld.vercel.app/login"
        og={{
          title: "Login | CDR World",
          description: "Secure login to access free and premium CorelDRAW (CDR) files.",
          type: "website",
          url: "https://cdrworld.vercel.app/login",
          site_name: "CDR World",
        }}
        twitter={{
          card: "summary_large_image",
          title: "Login | CDR World",
          description: "Secure login to access free and premium CorelDRAW (CDR) files.",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Login - CDR World",
          url: "https://cdrworld.vercel.app/login",
          description:
            "Sign in to your CDR World account to access free and premium CorelDRAW (CDR) files.",
          potentialAction: {
            "@type": "LoginAction",
            target: "https://cdrworld.vercel.app/login",
            name: "Sign in",
          },
        }}
      />


    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Header/>
      <main className="flex-1 flex items-center justify-center px-4 py-16">
         <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-teal-700">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-700 to-green-600 rounded-lg mb-4">
              <Lock className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Latest CDR Sea account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-700 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-700 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-800 hover:to-teal-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-teal-700 hover:text-teal-800 font-semibold transition"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
      </main>
     
      <Footer/>
    </div>
        </>
  );
}
