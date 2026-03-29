import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component with full support for structured data, OG, Twitter, and extra meta
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  og = {},
  twitter = {},
  structuredData = null,
  extraMeta = [],
}) {
  return (
    <Helmet>
      {/* TITLE & META */}
      <title>{title || "CDRWORLD"}</title>
           <meta
        name="description"
        content={description || "Free CDR files download"}
      />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow" />


      {/* ✅ ADDED: Favicon fallback */}
      <link rel="icon" href="/favicon.ico" /> 

      {/* EXTRA META */}
      {extraMeta.map((meta, i) => (
        <meta key={i} {...meta} />
      ))}

      {/* OPEN GRAPH */}
      {og.title && <meta property="og:title" content={og.title} />}
      {og.description && <meta property="og:description" content={og.description} />}
      {og.url && <meta property="og:url" content={og.url} />}
      {og.type && <meta property="og:type" content={og.type} />}
      {og.image && <meta property="og:image" content={og.image} />}

      {/* ✅ ADDED: Important OG tags */}
      <meta property="og:image:width" content="1200" /> {/* ADDED */}
      <meta property="og:image:height" content="630" /> {/* ADDED */}
      <meta property="og:site_name" content="CDRWORLD" /> {/* ADDED */}
      
      {og.site_name && <meta property="og:site_name" content={og.site_name} />}
      {og.locale && <meta property="og:locale" content={og.locale} />}

      {/* TWITTER */}
      {twitter.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter.description && <meta name="twitter:description" content={twitter.description} />}
      {twitter.image && <meta name="twitter:image" content={twitter.image} />}
      {twitter.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter.creator && <meta name="twitter:creator" content={twitter.creator} />}

      {/* STRUCTURED DATA */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
    </Helmet>
  );
}