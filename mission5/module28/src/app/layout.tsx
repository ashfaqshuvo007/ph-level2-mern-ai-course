import "./globals.css";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Navbar } from "@/components/ui/shared/navbar";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", roboto.variable)}
    >
      <body className="min-h-full flex flex-col"> 
        <Toaster richColors position="top-right"/>
        {children}
        {/* footer */}
        </body>
    </html>
  );
}
