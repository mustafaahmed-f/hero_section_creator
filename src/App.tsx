import {
  lazy,
  LazyExoticComponent,
  Suspense,
  useEffect,
  useState,
} from "react";
import "./App.css";
import { templateOneType } from "./types/templateOneType";
import { templateThreeType } from "./types/templateThreeType";
import { templateTwoType } from "./types/templateTwoType";
import RegenerateBtn from "./components/RegenerateBtn.tsx";
import Loader from "./components/Loader.tsx";

const LazyErrorComponent = lazy(() => import("./components/ErrorComponent"));

type templateType =
  | LazyExoticComponent<typeof import("./templates/template1").default>
  | LazyExoticComponent<typeof import("./templates/template2").default>
  | LazyExoticComponent<typeof import("./templates/template3").default>
  | null;

type templateSchemaType = templateOneType & templateTwoType & templateThreeType;

function App() {
  const { 0: template, 1: setTemplate } = useState<templateType>(null);
  const { 0: templateSchema, 1: setTemplateSchema } =
    useState<templateSchemaType | null>(null);
  const { 0: currentSectionNum, 1: setCurrentSectionNum } = useState<number>(2);

  function changeSection() {
    if (currentSectionNum === 2) {
      setCurrentSectionNum(1);
    } else {
      setCurrentSectionNum((prev) => prev + 1);
    }
  }

  useEffect(() => {
    setTemplate(null);
    setTemplateSchema(null);
    import(`./sections/section${currentSectionNum}.ts`)
      .then((json) => {
        console.log(json);
        setTemplateSchema(json.sectionSchema);
        switch (json.sectionSchema.templateType) {
          case 1:
            setTemplate(lazy(() => import("./templates/template1.tsx")));
            break;

          case 2:
            setTemplate(lazy(() => import("./templates/template2.tsx")));
            break;

          case 3:
            setTemplate(lazy(() => import("./templates/template3.tsx")));
            break;

          default:
            console.log("error");
            setTemplate(LazyErrorComponent);
            break;
        }
      })
      .catch((err: any) => {
        console.log(err);
        setTemplate(LazyErrorComponent);
      });
  }, [currentSectionNum, setTemplate, setTemplateSchema]);

  const SectionComponent = template;

  return (
    <div className="relative w-full h-full">
      <RegenerateBtn onClick={changeSection} />
      <Suspense fallback={<Loader />}>
        {SectionComponent && templateSchema && (
          <SectionComponent templateSchema={templateSchema} />
        )}
      </Suspense>
    </div>
  );
}

export default App;
