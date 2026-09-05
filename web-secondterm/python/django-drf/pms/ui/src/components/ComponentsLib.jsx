export const InputField = (props) => {
  const { type, hint, className, ...otherProps } = props;
  return (
    <input
      {...otherProps}
      type={type}
      placeholder={hint}
      className={`${className} w-full bg-gray-200 border border-gray-300 rounded p-3 focus:outline focus:outline-blue-600`}
    />
  );
};

export const SimpleButton = (props) => {
  const { type, text, className, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      type={type}
      className={`${className} bg-blue-600 border border-gray-300 rounded py-2 px-4 text-white hover:bg-blue-700`}
    >
        {text}
    </button>
  );
};

export const SelectInput = (props) => {
  const { className, ...otherProps } = props;

  return (
    <select></select>
  )
}
