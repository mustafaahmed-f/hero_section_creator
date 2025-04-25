import { templateOneType } from "../types/templateOneType";

export interface template1Props {
  templateSchema: templateOneType;
}

function template1({ templateSchema }: template1Props) {
  return <div>template {templateSchema.templateType} </div>;
}

export default template1;
