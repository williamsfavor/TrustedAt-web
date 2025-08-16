import { Link, Outlet, useLocation, useNavigate } from "react-router";

export default function LegalPage() {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full hidden md:flex items-center justify-center py-8 text-gray-600">
        <h1>Legal</h1>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row md:px-14 px-5 gap-2">
        <div className="md:w-[20%] w-full   md:pr-3 overflow-scroll md:overflow-auto ">
          <ul className="flex md:flex-col md:w-full  min-w-[150vh] gap-2 ">
            <li
              onClick={() => navigate("/legal")}
              className={`h-[38px] w-auto cursor-pointer ${
                location.pathname === "/legal"
                  ? "text-primary  md:border-l-primary  border-b-primary "
                  : "hover:text-primary border-transparent border-b-[4px]"
              } flex items-center px-2 md:border-l-[4px] `}
            >
              Privacy Policy
            </li>
            <li
              onClick={() => navigate("/legal/user-agreement")}
              className={`md:h-[38px] cursor-pointer ${
                location.pathname === "/legal/user-agreement"
                  ? "text-primary md:border-l-primary border-b-primary"
                  : "hover:text-primary border-transparent "
              } flex items-center px-2 md:border-l-[4px] `}
            >
              User Agreement
            </li>
            <li
              onClick={() => navigate("/legal/ethical-code")}
              className={`md:h-[38px] cursor-pointer ${
                location.pathname === "/legal/ethical-code"
                  ? "text-primary md:border-l-primary border-b-primary "
                  : "hover:text-primary border-transparent "
              } flex items-center px-2 md:border-l-[4px] `}
            >
              TrustedAt ethical code
            </li>
            <li
              onClick={() => navigate("/legal/child-safety")}
              className={`md:h-[38px] cursor-pointer ${
                location.pathname === "/legal/child-safety"
                  ? "text-primary md:border-l-primary border-b-primary"
                  : "hover:text-primary border-transparent "
              } flex items-center px-2 md:border-l-[4px] `}
            >
              Child Safety Standard Policy
            </li>
            <li
              onClick={() => navigate("/legal/cookie-policy")}
              className={`h-[38px] cursor-pointer ${
                location.pathname === "/legal/cookie-policy"
                  ? "text-primary md:border-l-primary border-b-primary"
                  : "hover:text-primary border-transparent "
              } flex items-center px-2 md:border-l-[4px] `}
            >
              Cookie Policy
            </li>
          </ul>
        </div>
        <div className="md:w-[70%] w-full md:py-8">
          <div className="w-full flex md:hidden items-center justify-center md:py-8 py-6 text-gray-600">
            <h1>Legal</h1>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
