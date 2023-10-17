// routes
import AdminRoutes from "../routes/AdminRoutes";
import Navbar from "../widgets/Navbar";
import Sidebar from "../widgets/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-x-hidden bg-gray-100">
      {/* Left */}
      <Sidebar />
      {/* Right */}
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="h-screen overflow-y-scroll w-full p-4">
          <AdminRoutes />
        </div>
      </div>

      {/* <div className="m-auto w-[100%] min-h-[60%] flex flex-col justify-center"> */}
      {/* <UserRoutes /> */}
      {/* </div> */}
    </div>
  );
};

export default AdminLayout;
