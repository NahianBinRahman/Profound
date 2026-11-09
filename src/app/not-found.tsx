import Link from "next/link";
import { ArrowLeft, Compass, MoveRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white flex flex-col selection:bg-[#00e5ff] selection:text-[#050608]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#00e5ff]/15 via-indigo-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-2xl py-12">
          <Badge variant="electric" dot className="mb-6 mx-auto">
            404 Error · Coordinate Not Found
          </Badge>

          <div className="relative mb-6 select-none">
            <span className="text-[clamp(6rem,18vw,12rem)] font-extrabold tracking-tighter text-white/5 font-mono">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Lost in the{" "}
                <span className="font-editorial italic font-normal text-slate-300">
                  Digital Ether
                </span>
                <span className="text-[#00e5ff]">.</span>
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed mb-8 max-w-lg mx-auto">
            The page or architectural asset you are looking for has been relocated, archived,
            or does not exist within Profound&apos;s active namespaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button variant="electric" size="lg" icon={<ArrowLeft className="w-4 h-4 text-black" />}>
                Return to Homepage
              </Button>
            </Link>

            <Link href="/services">
              <Button variant="glass" size="lg" icon={<Compass className="w-4 h-4" />}>
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.08] flex items-center justify-center gap-6 text-xs font-mono text-neutral-400">
            <Link href="/work" className="hover:text-[#00e5ff] transition-colors flex items-center gap-1">
              <span>Selected Works</span>
              <MoveRight className="w-3 h-3" />
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-[#00e5ff] transition-colors flex items-center gap-1">
              <span>Contact Studio</span>
              <MoveRight className="w-3 h-3" />
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

