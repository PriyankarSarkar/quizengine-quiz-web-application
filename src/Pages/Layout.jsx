import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Nav />
      <div className="w-screen h-full">{children}</div>
    </div>
  );
};

export default Layout;
