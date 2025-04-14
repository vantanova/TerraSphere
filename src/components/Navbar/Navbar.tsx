import type { NavbarProps } from "./Navbar.types";

function Navbar({ logo, navLinks }: NavbarProps) {
  return (
    <nav className="pt-4 pl-4 flex items-center">
      {logo}

      <div />
    </nav>
  );
}

export default Navbar;
