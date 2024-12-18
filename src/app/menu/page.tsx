import Accordion from '@/components/accordion/Accordion'
import Dishes from '@/components/components/dishes/Dishes'
import Restaurants from '@/components/components/restaurants/Restaurants'

const Menu = () => {
	return (
		<section>
			<div className='mt-[200px]'>some text</div>
            <Restaurants />
            <Dishes />
            <Accordion />
		</section>
	)
}

export default Menu
