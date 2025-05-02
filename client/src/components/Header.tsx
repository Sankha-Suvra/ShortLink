import React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <header className="border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-neutral-600">URL Shortener</h1>
      </div>
    </header>
  );
};

export default Header;
