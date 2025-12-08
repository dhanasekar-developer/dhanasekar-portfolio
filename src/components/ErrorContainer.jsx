const ErrorContainer = ({ message }) => {
  return (
    <div
      className={`transition-all duration-300 overflow-hidden h-5 ${
        message ? 'opacity-100 mt-[2px]' : 'opacity-0'
      }`}
    >
      <div className="text-red-500 text-[13px] font-semibold">
        {message}
      </div>
    </div>
  );
};

export default ErrorContainer;
