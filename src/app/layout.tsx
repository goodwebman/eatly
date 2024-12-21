import Footer from '@/components/components/footer/Footer'
import Navigation from '@/components/components/navigation/Navigation'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Eatly',
	description: 'Eatly food',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} ${inter.variable} antialiased`}>
				<div className='flex flex-col min-h-[100vh] '>
					<Navigation />
					<main className='flex-1'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
