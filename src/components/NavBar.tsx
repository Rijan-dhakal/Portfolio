import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { label: "ABOUT", href: "/" },
    { label: "SKILLS", href: "/skills" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "PROJECTS", href: "/projects" },
  ];

  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-4 py-4 px-4 mb-16 relative z-10">
      <nav className="bg-surface-container rounded-full border border-outline flex items-center shadow-sm overflow-hidden">
        {links.map((link, i) => (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) =>
              cn(
                "px-4 md:px-6 py-3 font-label-caps text-xs md:text-sm font-bold transition-colors border-outline",
                i !== links.length - 1 && "border-r",
                isActive
                  ? "bg-surface-variant text-on-surface"
                  : "text-on-surface-variant hover:bg-surface-variant hover:text-on-surface",
              )
            }
            style={{ letterSpacing: "0.1em" }}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
