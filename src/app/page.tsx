import Dashboard from '@/components/shared/dashboard/Dashboard'
import Dishes from '@/components/shared/dishes/Dishes'
import Download from '@/components/shared/download/Download'
import Features from '@/components/shared/features/Features'
import Hero from '@/components/shared/hero/Hero'
import Restaurants from '@/components/shared/restaurants/Restaurants'
import Review from '@/components/shared/review/Review'
import Sale from '@/components/shared/sale/Sale'

export default function Home() {
	return (
		<main>
			<Hero />
			<Features />
			<Download />
			<Restaurants />
			<Dishes />
			<Dashboard />
			<Review />
			<Sale />
		</main>
	)
}
