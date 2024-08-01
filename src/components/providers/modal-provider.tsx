"use client"

import { useEffect, useState } from "react"
import { SettingsModal } from "../modals/settings-modal"

export const ModalProvider = () => {
    const [isMouted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMouted) {
        return null;
    }

    return (
        <>
            <SettingsModal/>
        </>
    );
};