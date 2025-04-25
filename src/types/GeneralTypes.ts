export interface navbarType {
  title: string;
  options: string[];
  textColor: string;
}

export interface btnType {
  bgColor: string;
  textColor: string;
  text: string;
  hoverColor: string;
}

export interface headlinesType {
  text: string;
  textColor: string;
}

export interface generalTemplateProperties {
  templateType: number;
  mainHeadline: headlinesType;
  subHeadline: headlinesType;
  navbar: navbarType;
  actionBtn: btnType;
}
