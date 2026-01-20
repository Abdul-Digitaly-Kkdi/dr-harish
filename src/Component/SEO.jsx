import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Best Orthopaedic Doctor in Trichy | Dr Harish Ortho",
  description = "Consult Dr Harish, a trusted orthopaedic doctor in Trichy, for knee pain, joint problems, fractures and sports injury treatment.",
  keywords = "Orthopaedic Doctor Trichy, Orthopaedic Surgeon Trichy, Bone Specialist Trichy, Knee Pain Treatment Trichy, Joint Pain Doctor Trichy, Sports Injury Doctor Trichy",
  image = "https://www.drharishortho.com/doctor-harish.png",
  url = "https://www.drharishortho.com/",
  author = "Dr Harish Ortho",
  type = "website",
}) => {
  return (
    <Helmet>
      {/* ===== BASIC META TAGS ===== */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index,follow" />
      <meta name="copyright" content="Copyright 2026" />
      <meta name="publisher" content="Dr Harish Ortho" />
      <meta httpEquiv="Cache-Control" content="no-cache" />

      {/* ===== CANONICAL ===== */}
      <link rel="canonical" href={url} />

      {/* ===== OPEN GRAPH META ===== */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta
        property="og:description"
        content="Dr Harish Ortho Clinic in Trichy offers expert care for knee pain, joint issues, fractures and sports injuries."
      />
      <meta property="og:site_name" content="Dr Harish Ortho" />
      <meta property="og:locale" content="en_IN" />

      {/* ===== TWITTER META ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Looking for an orthopaedic doctor in Trichy? Consult Dr Harish for expert bone and joint care."
      />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
