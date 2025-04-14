import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/layouts/Main/Main";

function Home() {
  return (
    <main className="h-screen bg-fern-green">
      <div className="p-2">
        <Navbar
          logo={<Logo />}
          navLinks={[
            { name: "spaces", href: "/spaces" },
            { name: "world", href: "/world" },
            { name: "badges", href: "/badges" },
          ]}
        />
        <Main />
      </div>
    </main>
  );
}

export default Home;
