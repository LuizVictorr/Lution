"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api"
import {toast} from "sonner"

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.document.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Criando uma nova nota",
            success: "Nova nota criada",
            error: "Erro ao criar a nota"
        })
    }

    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.png"
                height="300"
                width="300"
                alt="Empty"
                className="dark:hidden"
            />
            <Image
                src="/empty-dark.png"
                height="300"
                width="300"
                alt="Empty"
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium">
                {user?.username}, você não está em nenhuma nota
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Criar nota
            </Button>
        </div> 
    );
}
 
export default DocumentsPage;