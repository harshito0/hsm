import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Human Power Service — Expert Work Permit Support",
  description: "Fast, clear, and reliable services for obtaining work permits in Lithuania, Slovakia, Serbia, and more. Expert legal team, personalized solutions.",
  keywords: "work permit, employment programme, Lithuania, Slovakia, Serbia, immigration, visa, human power service",
  openGraph: {
    title: "Human Power Service — Expert Work Permit Support",
    description: "Fast, clear, and reliable work permit services for your peace of mind.",
    type: "website",
    url: "https://humansvc.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('hps_theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
