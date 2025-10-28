import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/ui/footer";


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <div className="mt-10"><Footer /></div>
      
    </div>
  );
}
