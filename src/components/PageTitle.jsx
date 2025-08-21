import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title || "Nanosoft - Software Solution"}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default PageTitle;
