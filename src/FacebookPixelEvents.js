import ReactPixel from "react-facebook-pixel";

export const VisitHomePage = () => {
  try {

    ReactPixel.pageView()
    console.log("visited home page");

  } catch (error) {
    console.warn("⚠️ Meta Pixel not initialized properly:", error);
  }
};
