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
  const { 0: currentSectionNum, 1: setCurrentSectionNum } = useState<number>(1);

  function changeSection() {
    if (currentSectionNum === 6) {
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
        setTemplateSchema(json.sectionSchema);
        switch (json.sectionSchema.templateType) {
          case 1:
            setTemplate(lazy(() => import("./templates/template1.tsx")));
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
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {SectionComponent && templateSchema && (
          <SectionComponent templateSchema={templateSchema} />
        )}
      </Suspense>
    </>
  );
}

export default App;
