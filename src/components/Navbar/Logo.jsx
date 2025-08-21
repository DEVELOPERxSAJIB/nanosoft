const logoUrl =
  "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755753751/Nanosoft/Nanosoft_logomain_optimized-1_qe2hzu.webp";

export const LogoDesk = () => (
  <img
    src={logoUrl}
    alt="NanoSoft Logo"
    width="200"
    height="80"
    decoding="async"
    fetchpriority="high"
    style={{ display: "block", objectFit: "cover" }}
  />
);

export const LogoMobile = () => (
  <img
    src={logoUrl}
    alt="NanoSoft Logo"
    width="150"
    height="50"
    decoding="async"
    fetchpriority="high"
    style={{ display: "block", marginTop: "10px", objectFit: "contain" }}
  />
);


