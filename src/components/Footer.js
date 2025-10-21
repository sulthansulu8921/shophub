import Link from "next/link";
import React from "react";
import "../styles/Footer.css"; // your CSS file if needed

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
