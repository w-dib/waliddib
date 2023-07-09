export const metadata = {
  title: "Blogs",
  description:
    "A list of my blogs on fundraising and entrepreneurship in MENA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
