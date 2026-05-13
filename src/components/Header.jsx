import React from "react";
import { GraduationCap, Phone, Menu } from "lucide-react";
import { useState } from "react";

const navlist = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#skills", text: "Skills" },
   { href: "#contact", text: "Contact" },
];

const Header = () => {
return (
<header className="fixed top-0 w-full bg-white shadow z-50">
<nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
<h1 className="text-xl font-bold">My Portfolio Test</h1>
<ul className="flex gap-6">
<li><a href="#about" className="hover:text-blue-600">About</a></li>
<li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
<li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
</ul>
</nav>
</header>
)
}


export default Header