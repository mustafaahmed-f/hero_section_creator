import { headlinesType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function Headline({ text, textColor = "black" }: headlinesType) {
  return (
    <div
      className=" text-4xl font-bold whitespace-break-spaces px-2 py-4"
      style={{ color: textColor }}
    >
      <EditableInput defaultValue={text} />
    </div>
  );
}

export default Headline;
