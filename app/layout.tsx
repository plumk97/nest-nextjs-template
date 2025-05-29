import React from "react"
import { Metadata } from "next";
import "./global.css"


export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}