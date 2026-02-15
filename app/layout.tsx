import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我的護城河課程',
  description: '2026 實戰營',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">{children}</body>
    </html>
  )
}
