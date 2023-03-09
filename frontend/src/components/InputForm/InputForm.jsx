const InputForm = ({ label, placeholder, type, register }) => {
  return (
    <div className="flex-1">
      <label htmlFor="input" className=" w-full py-2 font-body text-body-bold">
        {label}
      </label>
      <div className="w-full h-10 lg:h-9 ">
        <input
          className="w-full h-full text-caption font-caption border-2 border-neutral-200 focus:outline-none focus:ring focus:ring-violet-700 rounded-lg pl-2"
          type={type}
          id="input"
          placeholder={placeholder}
          {...register}
        />
      </div>
    </div>
  )
}

export default InputForm
