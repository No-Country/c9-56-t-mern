const LoadingSpinner = () => (
  <div className="flex items-center justify-center item-center w-full h-screen max-w-sm m-auto">
    <div
      className="text-violet-700 inline-block h-8 w-8 animate-spin rounded-full border border-slate-50  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <div>
        <img
          src="https://res.cloudinary.com/axiever/image/upload/v1677028424/Logo-principal_s7b5oq.svg"
          alt=""
        />
      </div>
    </div>
  </div>
)

export default LoadingSpinner
