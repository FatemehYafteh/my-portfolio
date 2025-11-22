
import "./globals.css";
import Nav from "@/components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[--color-background]/40 text-[--color-text-primary] font-sans antialiased relative min-h-screen overflow-x-hidden">
        <Nav />
        <main className="relative z-10 pt-20 container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
