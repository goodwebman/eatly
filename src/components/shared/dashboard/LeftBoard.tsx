'use client'
import { motion } from 'framer-motion'

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
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.8 }}
			variants={{
				hidden: { opacity: 0, x: -50 },
				visible: { opacity: 1, x: 0 },
			}}
			className='flex-[0_1_50%]'
		>
			<h2 className='text-left m-[0_0_50px] poppins font-[700] text-[45px] text-black/85'>
				Control <span className='text-[#6c5fbc]'>Purchases</span> <br /> Via
				Dashboard
			</h2>
			<ul className='grid grid-cols-[0.7fr] max-[990px]:grid-cols-3 max-[990px]:gap-[15px] max-[990px]:mb-[40px] max-[767px]:grid-cols-2 max-[575px]:grid-cols-1'>
				{products.map(product => (
					<DashboardCart
						key={product.id}
						name={product.name}
						imgLink={product.imgLink}
						status={product.status}
						time={product.time}
						id={product.id}
					/>
				))}
			</ul>
		</motion.div>
	)
}

export default LeftBoard
