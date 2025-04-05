import React from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body style={{
            textAlign: "center",
            margin: 0,
            padding: 0,
            minHeight: '100vh',
            color: 'white',
            background: '#0f0c29',
            backgroundImage: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
            fontFamily: '"Times New Roman", Times, serif',
        }}>
        {children}
        </body>
        </html>
    );
}
