export const metadata = {
  title: "Altura Software Solutions",
  description: "Modern websites & automation tools that elevate small businesses.",
  icons: {
    icon: "/favicon.png",
  },
};


import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Navbar />
        <PageTransition>
          <main className="min-h-screen pt-16">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
