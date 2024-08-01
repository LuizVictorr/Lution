"use client"

import { useSettings } from "../../../hooks/use-settings"
import { ModeToggle } from "../mode-toggle";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Label } from "../ui/label";

export const SettingsModal = () => {
    const settings = useSettings();
    

    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                        Minhas Configurações
                    </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Aparência
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground">
                            Customizado como Lution olha para seu dispositivo
                        </span>
                    </div>
                    <ModeToggle/>
                </div>
            </DialogContent>
        </Dialog>
    )
}