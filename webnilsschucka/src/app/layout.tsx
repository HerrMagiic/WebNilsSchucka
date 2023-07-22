import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
// import Navbar from './components/Navbar'

const poppins = Poppins({ 
    weight: '400', 
    subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'Nils Schucka Info',
  description: 'Links to my socials and other stuff',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='dark'>
            <body className={poppins.className}>
                <div className="m-auto w-[60%]">
                    <div className="container">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
