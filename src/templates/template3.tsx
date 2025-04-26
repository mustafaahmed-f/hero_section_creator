import Button from "../components/Button";
import Headline from "../components/Headline";
import NavBar from "../components/NavBar";
import SubHeadline from "../components/SubHeadline";
import { templateTwoType } from "../types/templateTwoType";

export interface template3Props {
  templateSchema: templateTwoType;
}

function template3({ templateSchema }: template3Props) {
  return (
    <section
      className="w-full relative h-full max-h-screen"
      style={{
        backgroundImage: `url(${templateSchema.backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {templateSchema.lessLight && (
        <div
          style={{
            backgroundColor: templateSchema.lessLight
              ? "rgba(0, 0, 0, 0.5)"
              : "transparent",
            opacity: templateSchema.lessLight ? 0.7 : 1,
          }}
          className="absolute inset-0"
        ></div>
      )}
      <div className="grid grid-rows-[auto_1fr] w-full h-full relative p-4 md:px-[144px] md:py-10">
        <NavBar {...templateSchema.navbar} />
        <div className="flex justify-start items-start pt-16">
          <div className="flex flex-col items-start justify-start">
            <Headline {...templateSchema.mainHeadline} />
            <SubHeadline {...templateSchema.subHeadline} />
            <div className="mt-8 bg-white rounded-full flex items-center w-fit px-1 py-1">
              <input
                className="outline-none border-none ps-2 bg-transparent"
                placeholder="ex: mostafa@gmail.com"
              />
              <Button {...templateSchema.actionBtn} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default template3;
