"use client"

import { xrStore } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full">
      <button onClick={() => xrStore.enterAR()}>Enter AR</button>
            {children}
        </main>
  );
}