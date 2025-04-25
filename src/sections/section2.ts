import { templateTwoType } from "../types/templateTwoType";

export const sectionSchema: templateTwoType = {
  templateType: 2,
  backgroundImg:
    "https://res.cloudinary.com/dvvmu40wx/image/upload/v1745621562/Public%20images/e-Learning1_argj94.jpg",
  lessLight: true,
  navbar: {
    title: "E-Learn",
    titleColor: "#FDFDFC",
    textColor: "#F3F2F2",
    options: ["Home", "Courses", "Pricing", "Contact"],
  },
  actionBtn: {
    text: "Get Started",
    textColor: "#FDFDFC",
    bgColor: "#226AD3",
    hoverColor: "#1B4BCC",
  },
  mainHeadline: {
    text: "Upgrade Your Skills. On Your Schedule.",
    textColor: "#FDFDFC",
  },
  subHeadline: {
    text: "Online courses in technology, design and business",
    textColor: "#F3F2F2",
  },
};
