import { templateOneType } from "../types/templateOneType";

export const sectionSchema: templateOneType = {
  templateType: 1,
  navbar: {
    title: "StartupBase",
    textColor: "black",
    options: ["Home", "Features", "Pricing", "About Us"],
  },
  actionBtn: {
    text: "Get Started",
    textColor: "white",
    bgColor: "black",
  },
  mainHeadline: {
    text: "Ignite Your Vision. Launch with Confidence.",
    textColor: "black",
  },
  subHeadline: {
    text: "StartupBase gives early-stage founders the tools, insights, and guidance they need to transform bold ideas into scalable, investor-ready businesses. From planning to product, we’re with you every step of the way.",
    textColor: "black",
  },
  imageUrl:
    "https://res.cloudinary.com/dvvmu40wx/image/upload/v1745594987/Public%20images/startup_img_ejesxa.jpg",
};
