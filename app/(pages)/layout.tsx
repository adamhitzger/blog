import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <>
        <Navbar/>
        <main className="min-h-screen  flex flex-col flex-wrap space-y-8">
        {children}
      </main>
      <Footer/>
      </>
      
  );
}
