import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FILES_PER_PAGE = 12;

export default function Home() {

  const [category, setCategory] = useState("all");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = parseInt(searchParams.get("page") || "1");

  // CREATE SEO SLUG
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");
  };

  // LOAD PRODUCTS
  useEffect(() => {

    fetch("https://cdr-backend-murex.vercel.app/api/products")
      .then(res => res.json())
      .then(data => {
        setFiles(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });

  }, []);

  // FILTER
  const filteredFiles =
    category === "all"
      ? files
      : files.filter((f) => f.type === category);

  // PAGINATION
  const totalPages = Math.ceil(filteredFiles.length / FILES_PER_PAGE);

  const startIndex = (currentPage - 1) * FILES_PER_PAGE;

  const paginatedFiles = filteredFiles.slice(
    startIndex,
    startIndex + FILES_PER_PAGE
  );

  const handlePageChange = (page) => {
    navigate(`/?page=${page}`);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    handlePageChange(1);
  };

  return (

    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1">

        {/* HERO */}
        <section className="bg-white py-8">

          <div className="container mx-auto px-4 text-center">

        

            <h1 className="text-2xl md:text-3xl font-bold text-teal-700 mb-2">
               CDR WORLD - CorelDRAW Files
            </h1>

            <p className="text-gray-600">
              Browse and download premium and free CDR vector files.
            </p>

          </div>

        </section>

        {/* CATEGORY */}
        <section className="bg-gray-50 py-6">

          <div className="container mx-auto px-4 flex justify-center gap-4 flex-wrap">

            {["all", "free", "premium"].map((cat) => (

              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  category === cat
                    ? "bg-teal-700 text-white"
                    : "bg-white border border-teal-700 text-teal-700 hover:bg-teal-50"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>

            ))}

          </div>

        </section>

        {/* FILE GRID */}
        <section className="py-12">

          <div className="container mx-auto px-4">

            {/* LOADING SKELETON */}

            {loading && (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">

                {[...Array(8)].map((_, i) => (

                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
                  >

                    <div className="w-full h-48 bg-gray-300"></div>

                    <div className="p-4">

                      <div className="h-4 bg-gray-300 rounded mb-2"></div>

                      <div className="h-4 bg-gray-300 rounded w-2/3"></div>

                    </div>

                  </div>

                ))}

              </div>

            )}

            {/* FILES */}

            {!loading && (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">

                {paginatedFiles.map((file) => (

                  <Link
                    key={file._id}
                    to={`/detail/${createSlug(file.title)}-${file._id}`}
                    state={{ type: file.type }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                  >

                    <div className="relative">

                      <img
                        src={file.image}
                        alt={file.title}
                        loading="lazy"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">

                        <Star className="w-3 h-3" />

                        {file.type === "premium" ? "Premium" : "Free"}

                      </div>

                    </div>

                    <div className="p-4 flex-1 flex flex-col">

                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-3 flex-1">
                        {file.title}
                      </h3>

                    </div>

                  </Link>

                ))}

              </div>

            )}

            {/* PAGINATION */}

            {!loading && (

              <div className="flex justify-center gap-2 mt-8 flex-wrap">

                <button
                  onClick={() =>
                    handlePageChange(Math.max(currentPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 disabled:opacity-50"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (

                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded ${
                        page === currentPage
                          ? "bg-teal-700 text-white"
                          : "bg-white border border-teal-700 text-teal-700 hover:bg-teal-50"
                      }`}
                    >
                      {page}
                    </button>

                  )
                )}

                <button
                  onClick={() =>
                    handlePageChange(
                      Math.min(currentPage + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 disabled:opacity-50"
                >
                  Next
                </button>

              </div>

            )}

          </div>

        </section>

      </main>

      <Footer />

    </div>

  );
}