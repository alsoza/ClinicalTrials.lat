"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface MainNavProps {
    transparent?: boolean;
}

export function MainNav({ transparent = false }: MainNavProps) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const headerStyles = transparent
        ? "absolute top-0 w-full z-50 p-6"
        : "bg-white border-b border-slate-200 sticky top-0 z-50 p-4 md:p-0 h-16 flex items-center";

    const navContainerStyles = transparent
        ? "container mx-auto flex justify-between items-center"
        : "container mx-auto flex justify-between items-center";

    const logoTextStyles = transparent
        ? "text-xl font-bold text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
        : "text-xl font-bold text-slate-900 flex items-center gap-2 hover:opacity-80 transition-opacity";

    const linkStyles = transparent
        ? "text-white/80 hover:text-white transition-colors"
        : "text-slate-600 hover:text-primary transition-colors";

    const buttonStyles = transparent
        ? "text-sm font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-5 py-2.5 rounded-xl transition-all shadow-xl"
        : "text-sm font-bold text-primary border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors bg-white px-5 py-2.5 shadow-sm";

    const mobileButtonStyles = transparent
        ? "text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        : "text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors";

    return (
        <>
            <header className={headerStyles}>
                {transparent && (
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/40 to-transparent pointer-events-none -z-10" />
                )}
                <nav className={navContainerStyles}>
                    <Link href="/" className={logoTextStyles}>
                        <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">CT</span>
                        <span className="tracking-tight">ClinicalTrials.lat</span>
                    </Link>

                    <div className="hidden md:flex gap-8 text-sm font-bold">
                        <Link href="/search" className={linkStyles}>Buscar Estudios</Link>
                        <Link href="/patients" className={linkStyles}>Para Pacientes</Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href="/researchers" className={`hidden md:block ${buttonStyles}`}>
                            Acceso Investigadores
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`md:hidden ${mobileButtonStyles}`}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex justify-between items-center p-6 border-b border-slate-100">
                        <Link href="/" className="text-xl font-bold text-slate-900 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">CT</span>
                            <span>ClinicalTrials.lat</span>
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6 text-slate-600" />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <nav className="flex-1 p-6">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${pathname === "/" ? "bg-blue-50 text-primary" : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/search"
                                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${pathname === "/search" ? "bg-blue-50 text-primary" : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Buscar Estudios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/patients"
                                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${pathname === "/patients" ? "bg-blue-50 text-primary" : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Para Pacientes
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="p-6 border-t border-slate-100">
                        <Link
                            href="/researchers"
                            className="block w-full text-center py-3 px-6 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Acceso Investigadores
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
