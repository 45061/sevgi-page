import NavBar from "../components/Navbar";

// import { Provider } from "react-redux";

// import { wrapper, store } from "./store/store";

import "../styles/globals.css";

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Sevgi Sense</title>
        <meta name="Hostal" content="app Sevgi Sense" />
        <link rel="icon" href="/sevgi.png" />
      </head>
      <body>
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

// export default wrapper.withRedux(RootLayout);

export default RootLayout;
