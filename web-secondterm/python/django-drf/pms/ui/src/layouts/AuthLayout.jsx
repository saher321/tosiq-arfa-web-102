import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="m-5 font-bold text-blue-600 italic">pms</div>
      <div className="mx-auto max-w-2xl">{children}</div>
    </div>
  );
};

export default AuthLayout;
