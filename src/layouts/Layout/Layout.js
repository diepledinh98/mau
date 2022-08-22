import Header from "../components/Header/Header";
import "./Layout.scss";
function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="container-body">{children}</div>
    </div>
  );
}

export default Layout;
