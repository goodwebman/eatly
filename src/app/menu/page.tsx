import Accordion from '@/components/shared/accordion/Accordion'
import Dishes from '@/components/shared/dishes/Dishes'
import MenuFilter from '@/components/shared/menuFilter/MenuFilter'
import Restaurants from '@/components/shared/restaurants/Restaurants'

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
