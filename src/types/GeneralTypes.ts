export interface navbarType {
  title: string;
  titleColor?: string;
  options: string[];
  textColor: string;
  dropDownTextColor?: string; //// Used to apply color to navbar dropdown items for screen width less than 768px
}

export interface btnType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: string;
  textColor: string;
  text: string;
  hoverColor: string;
}

export interface headlinesType {
  text: string;
  textColor: string;
  textAlignment?: "left" | "center" | "right";
}

export interface generalTemplateProperties {
  templateType: number;
  mainHeadline: headlinesType;
  subHeadline: headlinesType;
  navbar: navbarType;
  actionBtn: btnType;
}
