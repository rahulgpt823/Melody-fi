const PasswordInput = ({label,placeholder,className}) => {
  return (
    <div className={`textInputDiv text-xs  flex flex-col  space-y-1 w-full ${className}`}>
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>

      <input
        type="password"
        placeholder={placeholder}
        className=" p-2  border-2 border-gray-300 rounded placeholder-gray-400"
        id={label}
      />
    </div>
  )
}
export default PasswordInput;
