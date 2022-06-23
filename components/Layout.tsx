/** @jsxImportSource theme-ui */
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main sx={{ fontFamily: "body" }}>{children}</main>
    </>
  );
};

export default Layout;
