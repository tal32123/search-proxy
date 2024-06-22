import StoreProvider from "@/redux/StoreProvider";
import './globals.css';
import AppLayout from "./layout/AppLayout";
import { AntdRegistry } from '@ant-design/nextjs-registry';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AntdRegistry>
          <AppLayout>{children}</AppLayout>
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
