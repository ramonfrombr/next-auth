import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-red-500">Auth Layout</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
