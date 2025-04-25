import { templateOneType } from "../types/templateOneType";

export interface template1Props {
  templateSchema: templateOneType;
}

function template1({}: template1Props) {
  return <div>template 1</div>;
}

export default template1;
