// routes
import UserRoutes from "../routes/UserRoutes";
import AppRoutes from "../routes/AppRoutes";

const UserLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden bg-teal-100">
      {/* Logo in the top-left corner */}
      <div className="absolute top-3 left-5 p-4">
        <span className="font-poppins text-2xl font-semibold leading-36 tracking-tight text-green-800">
          <span className="relative inline-block before:absolute before:content-[''] before:w-3 before:h-3 before:-top-1 before:-left-2 before:bg-teal-400 before:rounded-full"></span>
          <span className="relative inline-block after:absolute after:content-[''] after:w-3 after:h-3 after:-bottom-1 after:-right-2 after:bg-teal-400 after:rounded-full"></span>
          logo
        </span>
      </div>

      <div className="m-auto w-[100%] min-h-[60%] flex flex-col justify-center">
        {/* <UserRoutes /> */}
        <AppRoutes />
      </div>
    </div>
  );
};

export default UserLayout;
