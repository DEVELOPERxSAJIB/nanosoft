import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{ title || "Nanosoft - Software Solution"}</title>
    </Helmet>
  );
};

export default PageTitle;
