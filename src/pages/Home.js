import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const FILES_PER_PAGE = 12;

export default function Home() {

  const [category, setCategory] = useState("all");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
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
    setLoading(true);

    fetch(`https://cdr-backend-murex.vercel.app/api/products?page=${currentPage}&limit=${FILES_PER_PAGE}`)
      .then(res => res.json())
      .then(data => {
        // 🔥 SUPPORT BOTH API FORMATS
        setFiles(data.data || data);
        setTotalPages(data.totalPages || 1);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });

  }, [currentPage]);

  const filteredFiles = useMemo(() => {
    return category === "all"
      ? files
      : files.filter((f) => f.type === category);
  }, [category, files]);

  // PAGINATION

  const handlePageChange = (page) => {
    navigate(`/?page=${page}`);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    handlePageChange(1);
  };

  // Structured data for paginated files
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CDR World Files",
    description:
      "Browse and download premium and free CorelDRAW (CDR) vector files at CDR World.",
    url: "https://cdrworld.vercel.app/",
    numberOfItems: files.length,
    itemListElement: filteredFiles.map((file, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://cdrworld.vercel.app/detail/${createSlug(file.title)}-${file._id}`,
      name: file.title,
      image: `${file.image}?w=400&q=70`,
      item: {
        "@type": "CreativeWork",
        genre: file.type,
      },
    })),
  };


  return (

    <>
      <SEO
        title="Free CDR Files Download | CorelDRAW Designs | CDRWORLD"
        description="Download high-quality CorelDRAW (CDR) vector files for free and premium use. Explore logo designs, stickers, business cards, vehicle branding and more at CDR World."
        keywords="CDR files, CorelDRAW designs, free CDR download, premium vector files, CorelDRAW templates, logo design CDR, sticker design CDR, vehicle branding CDR, vector files download"
        canonical="https://cdrworld.vercel.app/"
        og={{
          title: "Free CDR Files Download | CDRWORLD",
          description:
            "Browse and download free & premium CorelDRAW (CDR) vector files. High-quality editable designs available.",
          url: "https://cdrworld.vercel.app/",
          type: "website",
          image: "https://cdrworld.vercel.app/cdrworld-preview.png",
        }}
        twitter={{
          card: "summary_large_image",
          title: "CDR World - CorelDRAW Files",
          description: "Download free and premium CorelDRAW vector files easily.",
          image: "https://cdrworld.vercel.app/cdrworld-preview.png",
          site: "@cdrworld",
        }}
        structuredData={structuredData}
        extraMeta={[{ name: "theme-color", content: "#0f766e" }]}
      />

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
                  className={`px-6 py-2 rounded-full font-semibold transition ${category === cat
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

                  {filteredFiles.map((file, index) => (

                    <Link
                      key={file._id}
                      to={`/detail/${createSlug(file.title)}-${file._id}`}
                      state={{ type: file.type }}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                    >

                      <div className="relative">

                        <img
                          src={`${file.image}?w=400&q=70`}
                          srcSet={`
    ${file.image}?w=300&q=60 300w,
    ${file.image}?w=400&q=70 400w,
    ${file.image}?w=600&q=80 600w
  `}
  
                          loading={index < 3 ? "eager" : "lazy"}
                          fetchpriority={index < 3 ? "high" : "auto"}
                          decoding="async"
                          width="400"
                          height="300"
                          style={{ aspectRatio: "4/3" }}
                          alt={file.title}
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
                        className={`px-4 py-2 rounded ${page === currentPage
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
    </>

  );
}