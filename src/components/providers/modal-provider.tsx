"use client"

import { useEffect, useState } from "react"
import { SettingsModal } from "../modals/settings-modal"
import { CoverImageModal } from "../modals/cover-image-modal";

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
            <CoverImageModal/>
        </>
    );
};