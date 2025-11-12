export default function RootLayout({children}:{children: React.ReactNode}){
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-50 text-ink-800 antialiased">{children}</body>
    </html>
  )
}
