import { templateTwoType } from "../types/templateTwoType";

export const sectionSchema: templateTwoType = {
  templateType: 3,
  backgroundImg:
    "https://res.cloudinary.com/dvvmu40wx/image/upload/v1745668265/Public%20images/Newsletter_background_hhlzcs.jpg",
  lessLight: true,
  navbar: {
    title: "Stay in the Loop",
    titleColor: "#F3F2F2", // light grayish white for clarity over dark bg
    textColor: "#D1D1D1", // slightly muted white for navbar options
    options: ["Home", "Newsletter", "Articles", "Contact"],
    dropDownTextColor: "#010509", // dark color on small screens
  },
  actionBtn: {
    text: "Subscribe",
    textColor: "#FDFDFC", // pure white
    bgColor: "#474531", // muted olive from background
    hoverColor: "#3D4849", // darker muted tone for hover
    roundedFull: true,
  },
  mainHeadline: {
    text: "Stay Informed. Stay Inspired.",
    textColor: "#FDFDFC", // pure white for strong contrast
    textAlignment: "left",
  },
  subHeadline: {
    text: "Join thousands of readers who receive curated insights, tips, and updates every week — straight to their inbox.",
    textColor: "#D1D1D1", // slightly soft white for subheadline
    textAlignment: "left",
  },
};
