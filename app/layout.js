import "./globals.css";

export const metadata = {
  title: "Walid Daniel Dib",
  description: "About me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
