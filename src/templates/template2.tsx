import Button from "../components/Button";
import Headline from "../components/Headline";
import NavBar from "../components/NavBar";
import SubHeadline from "../components/SubHeadline";
import { templateTwoType } from "../types/templateTwoType";

export interface template2Props {
  templateSchema: templateTwoType;
}

function template2({ templateSchema }: template2Props) {
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
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center sm:gap-3 gap-2 md:gap-6">
            <Headline {...templateSchema.mainHeadline} />
            <SubHeadline {...templateSchema.subHeadline} />
            <div className="mt-4">
              <Button {...templateSchema.actionBtn} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default template2;
