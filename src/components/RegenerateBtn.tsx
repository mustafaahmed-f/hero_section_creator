import Button from "./Button";

function RegenerateBtn({ onClick }: { onClick?: () => void }) {
  return (
    <div className="fixed right-[25px] bottom-[25px] z-50">
      <Button
        text="Regenerate with AI"
        bgColor="#6938EF"
        textColor="#FFFFFF"
        hoverColor="#7F56D9"
        onClick={onClick}
      />
    </div>
  );
}

export default RegenerateBtn;
