import { headlinesType } from "../types/GeneralTypes";
import EditableInput from "./EditableInput";

function Headline({ text, textColor = "black", textAlignment }: headlinesType) {
  return (
    <div
      className="sm:text-5xl md:text-6xl text-4xl leading-tight break-words font-bold whitespace-break-spaces px-1 py-4 w-full"
      style={{ color: textColor }}
    >
      <EditableInput defaultValue={text} textAlignment={textAlignment} />
    </div>
  );
}

export default Headline;
