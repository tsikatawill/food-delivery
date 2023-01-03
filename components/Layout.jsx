import { Footer, Navbar } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
};
