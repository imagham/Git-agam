import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 py-6 text-center text-sm text-gray-500 border-t">
      <p>
        &copy; {new Date().getFullYear()} Task Dashboard. Built with ❤️ using
        React & Tailwind CSS.
      </p>
    </footer>
  );
}
