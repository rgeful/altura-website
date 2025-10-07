import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 text-center md:grid-cols-3">

          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo.png" alt="Altura Logo" width={36} height={36} className="object-contain" />
              <span className="sr-only">Altura Software Solutions</span>
            </Link>
            <p className="text-sm text-gray-400">
              Modern websites & automation tools that elevate small businesses.
            </p>
          </div>

          <nav aria-label="Footer" className="space-y-3">
            <h3 className="text-sm font-semibold">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </nav>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  alturasoftware@gmail.com
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <Link
                href="https://www.instagram.com/alturasoftwaresolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center"
              >
                <Image
                  src="/iglogo.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t text-center border-white/10 pt-6 text-xs text-gray-500">
          © {year} Altura Software Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
