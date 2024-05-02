import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
  
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

 
        {children}
      </main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy;  Portafolio Rafael Benguria</h1>
            <p>1998 - {new Date().getFullYear()}</p>
            <p>Reservados todos los derechos.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;