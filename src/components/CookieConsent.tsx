"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CookieConsent({ dict }: any) {
    const [open, setOpen] = useState(() => {
        if (typeof window === "undefined") return false;
        return !localStorage.getItem("cookieConsent");
    });

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setOpen(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setOpen(false);
    };

    if (!open) {
        return null;
    }

    return (
        <div className="fixed bottom-8 right-4 md:right-8 lg:right-16 flex flex-col gap-4 w-1/2 min-w-70 max-w-80 p-4 md:p-8 bg-white shadow-black shadow-md z-50">
            <p>{dict.text}</p>
            <p>{dict.text2} <a href="/files/politica-privacidade-genquest.pdf" target="_blank" className="text-(--main-color) underline">{dict.linkText}</a></p>
            <button onClick={handleAccept} className="py-2 bg-(--main-color) hover:bg-(--secondary-color) text-white cursor-pointer">{dict.acceptButton}</button>
            <button onClick={handleDecline} className="py-2 bg-(--main-color) hover:bg-(--secondary-color) text-white cursor-pointer">{dict.declineButton}</button>
        </div>
    );
}
