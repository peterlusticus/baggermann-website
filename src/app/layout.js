import "./globals.css";
import "../../public/css/animate.min.css";
import "../../public/css/fontawesome-all.min.css";
import "../../public/css/progressBar.min.css";
//color style
import "../../public/css/color/color1.css";
import "../../public/css/color/color2.css";
import "../../public/css/color/color3.css";
import "../../public/css/color/color4.css";
import "../../public/css/color/color5.css";
import "../../public/css/color/color6.css";
import "../../public/css/color/color7.css";
import "../../public/css/color/color8.css";
import "../../public/css/color/color9.css";
import "../../public/css/color/color10.css";

import "swiper/css";
import "../../node_modules/aos/dist/aos.css";
import "../../node_modules/react-modal-video/css/modal-video.css";
import "../../node_modules/react-18-image-lightbox/src/style.css";

export const metadata = {
  title: "BAGGERMANN Erfurt - Ihr Partner für Baggerarbeiten",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Jost:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body className="dark">{children}</body>
    </html>
  );
}
