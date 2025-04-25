import { btnType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function Button({ text, textColor, bgColor }: btnType) {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
      className="py-1 px-2 rounded-md"
    >
      <EditableInput defaultValue={text} />
    </button>
  );
}

export default Button;
