import { templateTwoType } from "../types/templateTwoType";

export interface template2Props {
  templateSchema: templateTwoType;
}

function template2({}: template2Props) {
  return <div>template 2</div>;
}

export default template2;
