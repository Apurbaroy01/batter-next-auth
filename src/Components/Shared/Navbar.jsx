"use client";

import { signOut, useSession } from "@/app/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
    const { data, isPending, error } = useSession();
    if (isPending) {
        return <div>Loading...</div>;

    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log("Session data in Navbar:", data);

    const user = data?.user;


    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <p className="font-bold">ACME</p>
                </div>
                <ul className="flex items-center gap-4">
                    <li><Link href="#">Features</Link></li>
                    <li><Link href="#">Pricing</Link></li>
                </ul>
                <div>
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span>Welcome, {user.name || user.email}!</span>
                            <Button onClick={()=>signOut()}>Sign Out</Button>
                        </div> 
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link href="/auth/signin">Sign In</Link>
                            <Link href="/auth/signup">Sign Up</Link>
                        </div>
                    )}
                </div>
            </header>
        </nav>
    );
};

export default Navbar;