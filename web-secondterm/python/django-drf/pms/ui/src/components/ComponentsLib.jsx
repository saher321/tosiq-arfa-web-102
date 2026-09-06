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
      className={`${className} bg-blue-600 border border-gray-300 rounded-md py-2 px-4 text-white hover:bg-blue-700`}
    >
        {text}
    </button>
  );
};

export const SelectInput = (props) => {
  const { data = [], className, ...otherProps } = props;

  return (
    <select
      {...otherProps}
      className="w-full bg-gray-200 border border-gray-300 rounded p-3 focus:outline focus:outline-blue-600"
      >
        { data.length == 0 ?
          <option defaultValue="" disabled> No options provided yet </option> :

          <>
            <option disabled> Choose on option </option>
            {
              data.map((context, i) => {
                return (
                  <option key={i} value={context.id}>{context.text}</option>
                )
              })
            }
          </>
        }
      </select>
  )
}
