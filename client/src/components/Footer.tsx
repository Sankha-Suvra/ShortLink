import React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <footer className="border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-slate-400 text-sm">
          Copyright © URLShortner | SANKHA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
