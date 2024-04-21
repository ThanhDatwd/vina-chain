import { ToastContainer } from "react-toastify";

import { AuthProvider } from "@/providers/AuthProvider";
import { Web3Provider } from "@/providers/Web3Provider";
import { AugmentlabsWalletProvider } from "@/pkgs/augmentlab-wallet-connector/context";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import { Metadata } from "next";
import { AddressDetailProvider } from "@/components/AddressDetail/AdressDetailProvider";

export const metadata: Metadata = {
  title: "Vinachain",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <Web3Provider>
            <AugmentlabsWalletProvider>
              <AuthProvider>
                <AddressDetailProvider>
                  <ToastContainer theme="dark" />
                  <main>{children}</main>
                </AddressDetailProvider>
              </AuthProvider>
            </AugmentlabsWalletProvider>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
