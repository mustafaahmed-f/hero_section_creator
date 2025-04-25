import { templateThreeType } from "../types/templateThreeType";

export interface template3Props {
  templateSchema: templateThreeType;
}

function template3({}: template3Props) {
  return <div>template 3</div>;
}

export default template3;
