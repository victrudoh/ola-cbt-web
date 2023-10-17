const Navbar = () => {
  return (
    <div className="bg-white shadow-md w-full flex justify-between items-center p-2 px-4">
      {/* left */}
      <span className="font-inter text-[20px] ont-medium font-semibold leading-29 tracking-normal text-left">
        Students
      </span>
      {/* right */}
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center">
          <span className="font-semibold font-sans">Andee</span>
          <span className="font-sans text-sm">admin</span>
        </div>
        {/* logout */}
        <span className="bg-red-500 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-red-700">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Navbar;
