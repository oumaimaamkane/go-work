const Button = ({ children, className }) => {
  const defaultClasses =
    "h-fit text-white px-8 py-3 text-sm md:text-base rounded-full border-2 hover:bg-[#030303]";

  return (
    <button
      href="/"
      className={`${defaultClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
