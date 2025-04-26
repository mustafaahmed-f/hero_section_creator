import { btnType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function Button({
  text,
  textColor,
  bgColor,
  hoverColor,
  onClick,
  roundedFull,
}: btnType) {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: bgColor,
        borderRadius: roundedFull ? "3.5rem" : "0.375rem",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
      className="py-2 cursor-pointer px-5"
      onClick={onClick}
    >
      <EditableInput defaultValue={text} />
    </button>
  );
}

export default Button;
