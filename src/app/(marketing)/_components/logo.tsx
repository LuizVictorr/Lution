import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export const Logo = () => {

    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src="/LU-light.png"
                height="40"
                width="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/LU-dark.png"
                height="40"
                width="40"
                alt="Logo"
                className="hidden dark:block"
            />
            <p className={cn("font-semibold", font.className)}>
                Lution
            </p>
        </div>
    )
}