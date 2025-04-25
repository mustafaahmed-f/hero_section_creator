import { btnType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function Button({ text, textColor, bgColor, hoverColor }: btnType) {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
      className="py-2 cursor-pointer px-5 rounded-md"
    >
      <EditableInput defaultValue={text} />
    </button>
  );
}

export default Button;
