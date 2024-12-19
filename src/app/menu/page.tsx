import Accordion from '@/components/components/accordion/Accordion'
import Dishes from '@/components/components/dishes/Dishes'
import MenuFilter from '@/components/components/menuFilter/MenuFilter'
import Restaurants from '@/components/components/restaurants/Restaurants'

const Menu = () => {
	return (
		<section>
			<div className='mt-[200px]'>
				<MenuFilter />
				<Restaurants />
				<Dishes />
				<Accordion />
			</div>
		</section>
	)
}

export default Menu
