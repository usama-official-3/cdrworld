import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Download,
  Star,
  CheckCircle,
  ArrowLeft,
  LucideReceiptText,
  Trophy,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";



const features = [
  "100% Editable CDR/CMX File",
  "Print-Ready High Resolution",
  "Layered and Organized",
  "Compatible with CorelDRAW X4 and above",
  "Professional Quality Graphics",
  "Easy to Customize Colors and Text",
];

const pricingPlans = [
  {
    title: "Single File Plan — Starter",
    items: ["1 Premium File Download"],
    price: "Rs. 50 per file",
  },
  {
    title: "Basic Bundle Plan",
    items: ["3 Premium Files"],
    price: "Rs. 100",
  },
  {
    title: "Pro Bundle Plan",
    items: ["5 Premium Files"],
    price: "Rs. 150",
  },
  {
    title: "Mega Bundle Plan",
    items: ["10 Premium Files"],
    price: "Rs. 250",
  },
  {
    title: "All-Access Premium Plan",
    items: ["All Premium Files Access", "1 Month Access"],
    price: "Rs. 700 / Month",
  },
];

export default function Detail() {
 const { id } = useParams();

  const [file, setFile] = useState(null);
  const [relatedFiles, setRelatedFiles] = useState([]);

  console.log("file",file)
  // extract mongo id from slug
  const productId = id.split("-").pop();

  useEffect(() => {
    
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

    const loadData = async () => {

      try {

        const res = await fetch(`https://cdr-backend-murex.vercel.app/api/products/${productId}`);
        const data = await res.json();

        setFile(data);

        const rel = await fetch(`https://cdr-backend-murex.vercel.app/api/products`);
        const relData = await rel.json();

        setRelatedFiles(
          relData.filter((f) => f._id !== productId).slice(0, 4)
        );

      } catch (err) {
        console.log(err);
      }

    };

    loadData();

  }, [productId]);

  // if (!file) {
  //   return <div className="text-center py-20 text-xl">Loading...</div>;
  // }
  if (!file) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-12 animate-pulse">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Image Skeleton */}
          <div className="bg-gray-200 rounded-xl h-[420px] w-full"></div>

          {/* Text Skeleton */}
          <div className="space-y-5">

            <div className="h-8 bg-gray-200 rounded w-3/4"></div>

            <div className="h-5 bg-gray-200 rounded w-full"></div>
            <div className="h-5 bg-gray-200 rounded w-5/6"></div>
            <div className="h-5 bg-gray-200 rounded w-4/6"></div>

            <div className="h-14 bg-gray-200 rounded-xl w-full mt-6"></div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

  const isPremium = file.type === "premium";

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {isPremium && (
            <>
              {/* Package show images only premium */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[image1, image2, image3].map((img, index) => (
                      <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md group bg-gray-100"
                      >
                        <img
                          src={img}
                          alt={`Premium Plan Offer ${index + 1}`}
                          className=" w-full aspect-[764/1080] object-contain transition-transform duration-500 group-hover:scale-105
            "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end */}
            </>
          )}



          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="relative rounded-lg overflow-hidden">

                  <img
                    loading="lazy"
                    src={file.image}
                    alt={file.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {isPremium ? <>  Premium File </> : <> Free File</>}

                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-bold text-[#1F6272]">
                      Uploaded by: VECTOR SEA Digital Marketing Company
                    </p>
                  </div>
                </div>


                {isPremium && (
                  <>
                    {/*button show only Premium*/}
                    <div className="flex justify-center mt-8">
                      <button
                        className="inline-flex items-center gap-3 bg-teal-700 text-white px-8 py-4 rounded-xl text-xl md:text-2xl font-extrabold hover:bg-teal-800 hover:shadow-2xl premium-pulse"
                      >
                        📥 Purchase & Get File
                      </button>
                    </div>

                    <style>
                      {`
  .premium-pulse {
    will-change: transform;
  }

  .premium-pulse:hover {
    animation: pulseGrow 0.45s ease-in-out infinite;
  }

  @keyframes pulseGrow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.06);
    }
    100% {
      transform: scale(1);
    }
  }
`}
                    </style>
                    {/* end */}

                  </>


                )}


                {isPremium && (
                  <>

                    {/* IMAGE BOTTOM DETAIL SECTION  show only premium*/}
                    <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
                      {/* imageDetial */}
                      <p className="text-base md:text-lg lg:text-xl">
                        {file.imageDetail}

                      </p>

                      {/* WHAT YOU WILL RECEIVE */}
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          📦 What You Will Receive — Aapko Kya Milega
                        </h3>
                        <ul className="space-y-2 text-base md:text-lg">
                          <li>📂 <span className="font-bold">File Format:</span> CDR / CMX (CorelDRAW Editable)</li>
                          <li>🎨 <span className="font-bold">Editable:</span>  Yes — colors & size changeable</li>
                          <li>🖨 <span className="font-bold">Print-Ready:</span>  Yes</li>
                          <li>
                            📩 <span className="font-bold">Delivery Method:</span>  Manual Email Delivery after payment
                          </li>
                        </ul>
                      </div>

                      {/* IMPORTANT USAGE NOTE */}
                      <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                        <h3 className="text-lg md:text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                          ⚠ Important Usage Note
                        </h3>
                        <p className="text-base md:text-lg">
                          Files education & designing purpose ke liye provide ki ja
                          rahi hain User apne country ke rules follow karte hue use
                          kare Commercial use responsibility user ki hogi
                        </p>
                      </div>

                      {/* HOW TO ORDER */}
                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          💳 How to Order
                        </h3>
                        <ul className="space-y-2 text-base md:text-lg">
                          <li>🛒 Product page par “Buy Now” button click karein</li>
                          <li>📧 Payment complete hone ke baad</li>
                          <li>
                            📩 File email par manually send kar di jati hai (1–24
                            working hours ke andar)
                          </li>
                        </ul>
                      </div>

                      {/* SUPPORT */}
                      <div className="bg-green-50 p-5 rounded-lg">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          📞 Need Help? — Support Available
                        </h3>
                        <p className="text-base md:text-lg">
                          📞 For help or support, contact Latestcdrsea.com team
                          anytime on WhatsApp.
                          <br />
                          🟢 WhatsApp Number: <strong>0301-5702929</strong>
                        </p>
                      </div>
                    </div>
                  </>

                )}


              </div>

              <div>
                <div className="mb-4">
                  <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                    CDR / CMX File
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  {file.title}
                </h1>

                <div className="mb-6">
                  <h2 className="font-medium text-2xl text-[#0700DE] mb-3 flex items-center gap-2">
                    Description
                  </h2>
                  <p className="text-gray-700 text-xl ">
                    Editable CorelDRAW 12 & above Vector Design High-quality CDR
                    Vector Design Fully scalable and 100% editable
                  </p>
                </div>


                <div className="mb-6">
                  <h2 className="font-medium text-2xl text-red-500 mb-3 flex items-center gap-2">
                    Warning
                  </h2>
                  <p className="text-[#02B201] text-xl ">
                    All design resources are the intellectual property of their
                    respective owners
                  </p>
                </div>


                <div className="mb-6">
                  <h2 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-lime-500" />
                    File Features
                  </h2>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-lime-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isPremium && (
                  <>
                    {/* Pricing Plans show only premium*/}
                    <div className="mb-10 mt-10">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
                          <Trophy className="w-8 h-8 text-yellow-500" />
                          Premium Files Pricing Plans
                        </h2>

                        <p className="text-gray-600 mt-2 text-lg">
                          Choose the best plan and unlock high-quality premium
                          designs
                        </p>
                      </div>
                      <div className="space-y-4">
                        {pricingPlans.map((plan, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-5 bg-white hover:bg-gray-50 hover:shadow-md transition"
                          >
                            <h3 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                              <LucideReceiptText className="w-5 h-5 text-blue-600" />
                              {plan.title}
                            </h3>
                            <ul className="mt-3 space-y-2">
                              {plan.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-gray-700"
                                >
                                  <CheckCircle className="w-4 h-4 text-lime-500 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="mt-4 font-bold text-teal-700 text-lg flex items-center gap-2">
                              💰 <span className="text-gray-800">{plan.price}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </>
                )}


                {!isPremium && (
                  <a
                    href={file.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 w-full bg-teal-700 text-white py-4 px-6 rounded-xl font-extrabold text-xl md:text-2xl flex items-center justify-center gap-3 transition-colors hover:bg-teal-800 hover:shadow-2xl"
                  >
                    <Download className="w-5 h-5" />
                    Download Now - Free
                  </a>
                )}


                {isPremium && (
                  <>
                    {/* button show only premium */}
                    <button
                      className="w-full bg-teal-700 text-white py-4 px-6 rounded-xl font-extrabold text-xl md:text-2xl flex items-center justify-center gap-3 transition-colors hover:bg-teal-800 hover:shadow-2xl premium-hover-pulse "
                    >
                      📥 Purchase & Get File
                    </button>

                    <style>
                      {`
  .premium-hover-pulse:hover {
    animation: pulseGrowFull 0.6s ease-in-out infinite; /* 🔥 SPEED INCREASED */
  }

  @keyframes pulseGrowFull {
    0% { transform: scale(1); }
    50% { transform: scale(1.06); }
    100% { transform: scale(1); }
  }
`}
                    </style>
                  </>
                )}



                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> This file requires CorelDRAW software
                    to open and edit. Make sure you have CorelDRAW X4 or newer
                    version installed on your computer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 border-t">
              <h2 className="font-bold text-xl text-gray-800 mb-4">
                How to Use This File
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Download
                    </h3>
                    <p className="text-sm text-gray-600">
                      Click the download button to get the file
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Open</h3>
                    <p className="text-sm text-gray-600">
                      Open the file in CorelDRAW software
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Customize
                    </h3>
                    <p className="text-sm text-gray-600">
                      Edit colors, text, and elements as needed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         <div className="mt-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Files
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedFiles.map((related) => (

                <Link
                  key={related._id}
                  to={`/detail/${createSlug(related.title)}-${related._id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >

                  <img
                    loading="lazy"
                    src={related.image}
                    alt={related.title}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">

                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">
                      {related.title}
                    </h3>

                    <button className="text-teal-700 text-sm font-semibold flex items-center gap-1">

                      <Download className="w-4 h-4" />
                      View File

                    </button>

                  </div>

                </Link>

              ))}

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
