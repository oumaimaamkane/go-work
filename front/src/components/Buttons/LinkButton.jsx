import PropTypes from 'prop-types';

const LinkButton = ({ children, className }) => {

  LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
  };

  const defaultClasses =
    "inline-block h-fit px-8 py-3 md:py-4 md:px-12 text-sm md:text-base rounded-full bg-[#030303] hover:bg-gray-800 duration-200";

  return (
    <a
      href="/"
      className={`${defaultClasses} ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
