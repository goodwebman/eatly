import MenuSale from './MenuSale'

import Category from './Category'

const MenuFilter = () => {
	return (
		<section>
			<div className='container_'>
				<div className='flex justify-between max-[1300px]:flex-col max-[560px]:flex-col-reverse max-[1300px]:gap-[50px] '>
					<MenuSale />
					<Category />
				</div>
			</div>
		</section>
	)
}

export default MenuFilter
