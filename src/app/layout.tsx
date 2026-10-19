import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome Home",
  description: "A simple welcome page.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor:"lightblue", 
          padding:"1rem"
        }}>
          <p>header</p>
        </header>
        {children}
        <footer style={{
          backgroundColor: "red", 
          padding:"1rem"
        }}>
          <p>Footer</p>
        </footer>
        </body>
    </html>
  );
}
