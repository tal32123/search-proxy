import StoreProvider from "@/redux/StoreProvider";
import './globals.css';
import AppLayout from "./layout/AppLayout";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppLayout>{children}</AppLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
