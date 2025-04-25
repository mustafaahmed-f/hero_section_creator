import Button from "../components/Button";
import Headline from "../components/Headline";
import NavBar from "../components/NavBar";
import SubHeadline from "../components/SubHeadline";
import { templateOneType } from "../types/templateOneType";

export interface template1Props {
  templateSchema: templateOneType;
}

function template1({ templateSchema }: template1Props) {
  const { textColor, title, options } = templateSchema.navbar;
  const { text: mainHeadlineText, textColor: mainHeadlineTextColor } =
    templateSchema.mainHeadline;
  const { text: subHeadlineText, textColor: subHeadlineTextColor } =
    templateSchema.subHeadline;
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-full">
      <NavBar title={title} options={options} textColor={textColor} />
      <div className="grid h-full grid-cols-1 gap-x-10 gap-y-7 max-sm:grid-rows-[auto_1fr] sm:grid-cols-2 p-4 md:px-[144px] md:py-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-center h-full w-full">
            <Headline
              text={mainHeadlineText}
              textColor={mainHeadlineTextColor}
            />
            <SubHeadline
              text={subHeadlineText}
              textColor={subHeadlineTextColor}
            />
            <div className="flex items-center justify-center w-full mt-4 md:mt-7">
              <Button {...templateSchema.actionBtn} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center max-h-full  rounded-2xl">
          <img
            src={templateSchema.imageUrl}
            className="h-full max-h-[500px] min-w-full object-fill rounded-lg template-one-img"
            alt="section image"
          />
        </div>
      </div>
    </div>
  );
}

export default template1;
