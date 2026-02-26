'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { getImagePath } from '@/lib/utils';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex flex-col items-center group">
                            <Image
                                src={getImagePath("/logo.png")}
                                alt="Eddy Charlot TP Logo"
                                width={120}
                                height={90}
                                priority
                                className="object-contain group-hover:opacity-90 transition-opacity"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <Link href="/#activites" className="text-navy hover:text-gold font-medium transition-colors">
                            Mes Activités
                        </Link>
                        <Link href="/activites/broyage-forestier" className="text-gold font-bold hover:text-navy transition-colors flex items-center gap-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                            </span>
                            Broyage Forestier
                        </Link>
                        <Link href="#contact" className="text-navy hover:text-gold font-medium transition-colors">
                            Contact
                        </Link>
                    </nav>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-navy hover:text-gold focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 px-2 pt-2 pb-4 space-y-1 sm:px-3">
                    <Link href="/#activites" className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:text-gold hover:bg-gray-50">
                        Mes Activités
                    </Link>
                    <Link href="/activites/broyage-forestier" className="block px-3 py-2 rounded-md text-base font-bold text-gold hover:bg-gray-50">
                        Broyage Forestier (Nouveau)
                    </Link>
                    <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:text-gold hover:bg-gray-50">
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
