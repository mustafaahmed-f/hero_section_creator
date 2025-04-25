import { headlinesType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function SubHeadline({ text, textColor }: headlinesType) {
  return (
    <div
      className=" text-xl whitespace-break-spaces px-2 py-4"
      style={{ color: textColor }}
    >
      <EditableInput defaultValue={text} />
    </div>
  );
}

export default SubHeadline;
