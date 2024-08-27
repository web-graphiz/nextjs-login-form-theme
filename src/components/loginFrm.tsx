const LoginFrm = () => {
  return (
    <form action="">
      <h2 className="text-2xl font-medium text-darkBlue dark:text-white mb-5">
        Login
      </h2>
      <div className="my-3">
        <label className="text-darkBlue dark:text-gray text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          name=""
          className="w-full border-b-2 border-b-darkBlue dark:border-b-white bg-white bg-opacity-0 text-darkBlue dark:text-white outline-none px-3 py-px"
        />
      </div>
      <div className="my-3">
        <label className="text-darkBlue dark:text-gray text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          name=""
          className="w-full border-b-2 border-b-darkBlue dark:border-b-white bg-white bg-opacity-0 text-darkBlue dark:text-white outline-none px-3 py-px"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-darkBlue dark:bg-gray text-white dark:text-darkBlue py-2 font-medium rounded mt-4"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginFrm;
