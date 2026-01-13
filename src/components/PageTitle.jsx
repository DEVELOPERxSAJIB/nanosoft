import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title || "Nanosoft - Software Solution"}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
};

export default PageTitle;
