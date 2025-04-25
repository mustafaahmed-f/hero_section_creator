import { btnType, headlinesType, navbarType } from "./GeneralTypes";

export interface templateOneType {
  templateType: number;
  wholeBackGroundColr: string;
  navbar: navbarType;
  mainHeadline: headlinesType;
  subHeadline: headlinesType;
  imageUrl: string;
  actionBtn: btnType;
}
