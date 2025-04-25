interface ErrorComponentProps {}

function ErrorComponent({}: ErrorComponentProps) {
  return (
    <div className="w-full h-full flex justify-center items-center text-7xl text-red-600">
      <h1>Error</h1>
    </div>
  );
}

export default ErrorComponent;
