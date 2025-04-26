import { headlinesType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function SubHeadline({ text, textColor, textAlignment }: headlinesType) {
  return (
    <div className="text-xl w-full px-2 py-4" style={{ color: textColor }}>
      <EditableInput defaultValue={text} textAlignment={textAlignment} />
    </div>
  );
}

export default SubHeadline;
