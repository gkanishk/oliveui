import { useEffect, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Footer, Navbar, Sidebar } from "../components";
import "../styles/globals.css";

function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isHome, setHomePage] = useState(true);
  const { pathname } = useRouter();
  const width = useWindowSize();
  const style = {
    display: showSidebar ? "block" : "none",
  };

  const changeSidebarView = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    if (pathname === "/") return setHomePage(true);
    setHomePage(false);
  }, [pathname]);

  useEffect(() => {
    console.log(width);
    if (window.innerWidth <= 800) return setShowSidebar(false);
    setShowSidebar(true);
  }, [width]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      {!isHome && (
        <section className="bodyContainer">
          <div
            className="sidebarContainer"
            style={style}
            onClick={changeSidebarView}
          ></div>
          <div className="sidebar" style={style}>
            <Sidebar />
          </div>
          <div className="mainContent displayFlex">
            {!showSidebar && (
              <button className="showMenu" onClick={changeSidebarView}>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/right-arrow-1628229-1381583.png"
                  srcSet="https://cdn.iconscout.com/icon/premium/png-512-thumb/right-arrow-1628229-1381583.png 2x"
                  alt="Right Arrow Icon"
                  width="36"
                />
              </button>
            )}
            <Component {...pageProps} />
            <div className="footerContainer">
              <Footer />
            </div>
          </div>
        </section>
      )}
      {isHome&&<Component {...pageProps} />}
    </>
  );
}

export default MyApp;
