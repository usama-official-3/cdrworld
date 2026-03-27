import { Download, AlertCircle, CheckCircle, Laptop, FileText, MousePointer, FolderOpen, Smartphone} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function DownloadHelp() {
  return (
<>
  <SEO
        title="Download Guide | How to Download CDR Files | CDR World"
        description="Learn how to download free CDR and CMX vector files from CDR World. Step-by-step guide for PC users with complete instructions."
        keywords="CDR download guide, how to download CDR files, CorelDRAW download help, CMX files guide, vector files download tutorial"
        canonical="https://cdrworld.vercel.app/download-help"
        og={{
          title: "Download Guide | CDR World",
          description: "Step-by-step guide to download CDR & CMX files",
          url: "https://cdrworld.vercel.app/download-help",
          type: "article",
          site_name: "CDR World",
          locale: "en_US",
        }}
        twitter={{
          title: "CDR Download Guide",
          description: "Learn how to download CorelDRAW files step-by-step.",
          card: "summary",
          site: "@cdrworld",
          creator: "@cdrworld",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Download CDR Files",
          description: "Step-by-step guide to download CorelDRAW CDR and CMX files from CDR World.",
          step: [
            { "@type": "HowToStep", name: "Open Website on PC", text: "Use a computer or laptop and open browser." },
            { "@type": "HowToStep", name: "Open File Page", text: "Navigate to desired file page." },
            { "@type": "HowToStep", name: "Click Download", text: "Click download button to start." },
            { "@type": "HowToStep", name: "Save File", text: "Save file to your system." },
          ],
        }}
        extraMeta={[{ name: "author", content: "CDR World Team" }]}
      />


    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Download className="w-8 h-8 text-teal-700" />
              <h1 className="text-3xl font-bold text-teal-700">
                Free CDR & CMX Vector Files Download Guide
              </h1>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h2 className="font-bold text-yellow-800 mb-2">Important Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our website provides CDR, CMX and vector files for professional design purposes.
                    Currently, files can only be downloaded directly on Computer / Laptop.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <div className="flex items-start gap-2">
                <Smartphone className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Mobile users:</strong> Direct download is not currently supported.
                    Please use a Computer / Laptop to download files via our website.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-7 h-7 text-lime-500" />
                <h2 className="text-2xl font-bold text-teal-700">
                  How to Download? (Step-by-Step Guide)
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">Step 1: Open Website on PC</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start gap-2">
                      <Laptop className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p>Use your Computer / Laptop</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p>Open Browser (Chrome / Edge / Firefox)</p>
                    </div>
                    <p className="text-sm">Visit our website and browse available files</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-green-900 mb-2">Step 3: Click the Download Button</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start gap-2">
                      <MousePointer className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p>Click the button to start download</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Download className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p>File will download from Google Drive securely</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-900 mb-2">Step 2: Open File page </h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p>Navigate to the file you want to download</p>
                    </div>
                    <p className="text-sm">Each file page contains the Download Button</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-900 mb-2">Step 4: File Save </h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start gap-2">
                      <FolderOpen className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p>Choose your desired folder location</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p>Click Save to complete the download</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
              <div className="flex items-start gap-2">
                <Smartphone className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Mobile Users - Helpful Note</h3>
                  <p className="text-gray-700 mb-2">
                    Mobile devices cannot download or open CDR / CMX files directly.
                  </p>
                  <p className="text-gray-700">
                    <strong>Best experience:</strong> Use a Computer / Laptop for downloading and working with design files.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
                <h2 className="text-xl font-bold text-gray-800">Helpful Tips</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Ensure stable internet connection for smooth downloads</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Recommended browser: Google Chrome for best compatibility</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Files require CorelDRAW software to open and edit</p>
                </div>
              </div>
            </div>

            {/* <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-700 to-teal-800 text-white p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold">Premium CDR / CMX Vector File</h3>
                </div>
                <p className="text-gray-100 mb-4">Editable + Print-Ready</p>
                <p className="text-sm text-gray-200 mb-4">
                  Perfect for Designers, Printers & Branding Projects!
                </p>
                <button className="bg-white text-teal-700 hover:bg-gray-100 px-6 py-2 rounded font-semibold transition-colors flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  View Details
                </button>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Custom Design Service</h3>
                </div>
                <p className="text-gray-100 mb-4">Professional Work & Friendly Support</p>
                <p className="text-sm text-gray-100 mb-4">
                  We design banners, labels, stickers, packaging, branding & digital graphics — fully editable & print-ready files.
                </p>
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-2 rounded font-semibold transition-colors flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div> */}

            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded">
              <h3 className="font-bold text-gray-800 mb-2">Disclaimer</h3>
              <p className="text-sm text-gray-600">
                Files are provided for educational and design purposes. Please ensure you have proper
                licenses and permissions before using files commercially. Always check compatibility
                with your software version before downloading.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
