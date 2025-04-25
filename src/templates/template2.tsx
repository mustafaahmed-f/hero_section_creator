import { templateTwoType } from "../types/templateTwoType";

export interface template2Props {
  templateSchema: templateTwoType;
}

function template2({ templateSchema }: template2Props) {
  const { textColor, title, options } = templateSchema.navbar;
  const { text: mainHeadlineText, textColor: mainHeadlineTextColor } =
    templateSchema.mainHeadline;
  const { text: subHeadlineText, textColor: subHeadlineTextColor } =
    templateSchema.subHeadline;

  return <div>template 2</div>;
}

export default template2;
