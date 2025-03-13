import type { ReactNode } from "react";

export interface NavbarProps {
  logo: ReactNode;
  navLinks: navLink[];
}

type navLink = {
  name: string;
  href: string;
};
