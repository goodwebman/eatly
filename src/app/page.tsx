import Dishes from '@/components/components/dishes/Dishes'
import Download from '@/components/components/download/Download'
import Features from '@/components/components/features/Features'
import Hero from '@/components/components/hero/Hero'
import Restaurants from '@/components/components/restaurants/Restaurants'


export default function Home() {
	return (
		<main>
			<Hero />
			<Features />
			<Download />
			<Restaurants />
			<Dishes />
		</main>
	)
}
