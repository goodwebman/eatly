import DashboardCart from './DashboardCart'

const products = [
	{
		id: '01',
		name: 'Chiken Hell',
		imgLink: '/board1.png',
		status: 'On The Way',
		time: '3:09 PM',
	},

	{
		id: '02',
		name: 'Swe Dish',
		imgLink: '/board2.png',
		status: 'Canceled',
		time: 'Yesterday',
	},

	{
		id: '03',
		name: 'Fish Hel Veg',
		imgLink: '/board3.png',
		status: 'Deliveried',
		time: 'Yesterday',
	},
]

const LeftBoard = () => {
	return (
		<section className='flex-[0_1_50%]' >
			<h2 className='text-left m-[0_0_50px] poppins font-[600] text-[45px] text-[#323142]'>
				Control <span className='text-[#6c5fbc]'>Purchases</span> Via Dashboard
			</h2>
			<ul className='grid grid-cols-[0.7fr] max-[990px]:grid-cols-3 max-[990px]:gap-[15px] max-[990px]:mb-[40px] max-[767px]:grid-cols-2 max-[575px]:grid-cols-1'>
				{products.map(product => (
					<DashboardCart
                        key={product.id}
                        name={product.name}
                        imgLink={product.imgLink}
                        status={product.status}
                        time={product.time}
                        id={product.id}				/>
				))}
			</ul>
		</section>
	)
}

export default LeftBoard
