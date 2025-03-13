import type { NavbarProps } from "./Navbar.types";

function Navbar({ logo, navLinks }: NavbarProps) {
  return (
    <>
      <nav className="pt-4 pl-4 flex items-center justify-between">
        {logo}

        <ul className="flex justify-center">
          {navLinks.map((link) => (
            <li key={link.name} className="mx-4">
              <a
                href={link.href}
                className="text-forest-green text-lg font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div />
      </nav>
      <hr className="h-px my-4 mx-4 bg-dark-tan border-0" />
    </>
  );
}

export default Navbar;
