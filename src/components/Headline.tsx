import { headlinesType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function Headline({ text, textColor = "black", textAlignment }: headlinesType) {
  return (
    <div
      className=" text-5xl font-bold whitespace-break-spaces px-2 py-4 w-full"
      style={{ color: textColor }}
    >
      <EditableInput defaultValue={text} textAlignment={textAlignment} />
    </div>
  );
}

export default Headline;
