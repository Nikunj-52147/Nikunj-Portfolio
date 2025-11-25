import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[92%]">{children}</div>
        <div className="w-[8%] flex justify-center mt-20">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
