"use client"

import { useMutation } from "convex/react"
import { Doc } from "../../../../convex/_generated/dataModel"
import { useOrigin } from "../../../../hooks/use-origin"
import { api } from "../../../../convex/_generated/api"
import { useState } from "react"
import { toast } from "sonner"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, Copy, Globe } from "lucide-react"

interface PublishProps {
    initialData: Doc<"documents">
}

export const Publish = ({initialData}: PublishProps) => {
    const origin = useOrigin();
    const update = useMutation(api.document.update);

    const [copied, setCopied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const url = `${origin}/preview/${initialData._id}`;

    const onPublish = () => {
        setIsSubmitting(true);

        const promise = update({
            id: initialData._id,
            isPublished: true,
        })
            .finally(() => setIsSubmitting(false))

        toast.promise(promise, {
          loading: "Publicando...",
          success: "Página Publicada",
          error: "Falha ao publicar a nota"  
        })
    }

    const onUnpublish = () => {
        setIsSubmitting(true);

        const promise = update({
            id: initialData._id,
            isPublished: false,
        })
            .finally(() => setIsSubmitting(false))

        toast.promise(promise, {
          loading: "Despublicando...",
          success: "Página despublicada",
          error: "Falha ao despublicar a nota"  
        })
    }

    const onCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                    Publicar
                    {initialData.isPublished && (
                        <Globe className="text-sky-500 w-4 h-4 ml-2"/>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-72"
                align="end"
                alignOffset={8}
                forceMount
            >
                {initialData.isPublished ? (
                    <div className="space-y-4">
                        <div className="flex items-center gap-x-2">
                            <Globe className="text-sky-500 animate-pulse h-4 w-4"/>
                            <p className="text-xs font-medium text-sky-500">
                                Essa página está publicada na web
                            </p>
                        </div>
                        <div className="flex items-center">
                            <input
                                className="flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"
                                value={url}
                                disabled
                            />
                            <Button
                                onClick={onCopy}
                                disabled={copied}
                                className="h-8 rounded-l-none"
                            >
                                {copied ? (
                                    <Check className="h-4 w-4" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                        <Button
                            size="sm"
                            className="w-full text-xs"
                            disabled={isSubmitting}
                            onClick={onUnpublish}
                        >
                            Despublicar
                        </Button>
                    </div>

                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <Globe className="h-8 w-8 text-muted-foreground mb-2"/>
                        <p className="text-sm font-medium mb-2">
                            Publicar essa página
                        </p>
                        <span className="text-xs text-muted-foreground mb-4 text-center">
                            Compartilhe seu trabalho com outras pessoas
                        </span>
                        <Button
                            disabled={isSubmitting}
                            onClick={onPublish}
                            className="w-full text-xs"
                            size="sm"
                        >
                            Publicar
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    )
}