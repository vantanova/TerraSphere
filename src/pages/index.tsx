import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";

function Home() {
  return (
    <main className="h-screen bg-light-base">
      <Navbar
        logo={<Logo />}
        navLinks={[
          { name: "spaces", href: "/spaces" },
          { name: "world", href: "/world" },
          { name: "badges", href: "/badges" },
        ]}
      />
    </main>
  );
}

export default Home;
