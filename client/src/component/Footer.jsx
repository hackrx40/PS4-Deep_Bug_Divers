import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050713] text-white text-center py-4 inset-x-0 bottom-0">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Bajaj Finserv. All rights reserved.</p>
        <p>
          <a
            target="_blank"
            href="https://github.com/hackrx40/PS4-Deep_Bug_Divers/tree/main"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
          <a
            href="https://github.com/hackrx40/PS4-Deep_Bug_Divers/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
