import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome Home",
  description: "A simple welcome page.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
