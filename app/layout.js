import "./globals.css";

export const metadata = {
  title: "Walid Daniel Dib",
  description:
    "A site of all my posts and projects online. I mainly write about my experience fundraising and entrepreneurship in MENA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
