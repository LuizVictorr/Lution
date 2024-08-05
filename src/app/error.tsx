"use client"

import { Button } from "@/components/ui/button"
import { useQuery } from "convex/react"
import Image from "next/image"
import Link from "next/link"
import { api } from "../../convex/_generated/api"
import { Id } from "../../convex/_generated/dataModel"
import { useParams } from "next/navigation"

const Error = () => {

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/error.png"
                height="300"
                width="300"
                alt="Error"
                className="dark:hidden"
            />
                        <Image
                src="/error-dark.png"
                height="300"
                width="300"
                alt="Error"
                className="dark:block hidden"
            />
            <h2 className="text-xl font-medium">
                Ops, parece que essa página não existe mais
            </h2>
                <Button asChild>
                    <Link href="/documents">
                        Voltar
                    </Link>
                </Button>
        </div>
    )
}

export default Error