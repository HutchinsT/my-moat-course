import './globals.css'
export const metadata = { title: '我的護城河課程', description: '2026 實戰營' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
