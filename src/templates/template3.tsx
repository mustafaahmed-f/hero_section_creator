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
      <div className="grid grid-rows-[auto_1fr] w-full h-full relative">
        <NavBar {...templateSchema.navbar} />
        <div className="w-full mx-auto flex justify-start">
          <div className="flex max-w-screen-xl w-full mx-auto justify-start items-start p-4">
            <div className="flex flex-col items-start justify-start">
              <Headline {...templateSchema.mainHeadline} />
              <SubHeadline {...templateSchema.subHeadline} />
              <div className="mt-8 max-sm:me-auto bg-white rounded-full flex items-center w-fit px-1 py-1">
                <input
                  className="outline-none max-sm:max-w-36 border-none px-1 sm:ps-2 bg-transparent placeholder:max-sm:text-sm"
                  placeholder="Enter your email"
                />
                <Button {...templateSchema.actionBtn} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default template3;
