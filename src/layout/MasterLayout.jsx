import React from "react";
import { Link, NavLink } from "react-router-dom";

const MasterLayout = (props) => {
  return (
    <>
      <section className="bg-gray-100 w-full min-h-screen">
        <section className="bg-[#141C27] w-full h-[100px] flex items-center">
          <div className="container mx-auto">
            {/* Header sectoion */}
            <header className="flex justify-between">
              <Link to="/">
                <div className="logo w-[300px]">
                  <img src="assets/img/logo-dark.png" alt="" />
                </div>
              </Link>

              <nav className="flex items-center">
                <ul className="flex gap-10">
                  <li>
                    <NavLink
                      to="/"
                      className={(navData) =>
                        navData.isActive ? "navActive" : "navNotActive"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/all-qr-code"
                      className={(navData) =>
                        navData.isActive ? "navActive" : "navNotActive"
                      }
                    >
                      All QR Code
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </section>

        {/* main body */}
        <main className="min-h-screen">{props.children}</main>

        {/* Footer */}
        <footer className="bg-[#141C27] pt-[20px] pb-[20px] text-gray-100">
          <div className="container mx-auto">
            <div className="flex justify-center ">
              <p className="text-sm">
                © QR Code Generator 2024 ||{" "}
                <span className="text-theme font-semibold">
                  Ostad MERN Stack Batch 5
                </span>{" "}
                || All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default MasterLayout;
