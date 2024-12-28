'use client'
import { motion } from 'framer-motion'

import AccordionItem from './AccordionItem'


const items = [
	{
		title: 'How long does delivery take?',
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil aperiam ullam, rem fuga quae similique! Debitis possimus eligendi ut cupiditate?',
	},
	{
		title: 'How Does It Work ?',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem impedit porro voluptate nisi a nam aut reiciendis qui dolorem deleniti facilis error aperiam natus, ipsa sequi nobis, rerum odio? Quas numquam nostrum asperiores maxime laudantium non minus ipsam sunt consequatur.',
	},
	{
		title: 'How does your food delivery service work?',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem nihil dicta perferendis necessitatibus iusto quibusdam illum! Quod, soluta unde?',
	},

	{
		title: 'What payment options do you accept?',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui minus excepturi est modi tenetur quia sint? Natus, nulla nostrum! Sunt pariatur aliquam tempora velit facilis dolorum praesentium id quidem repudiandae fugiat alias ratione perferendis deserunt ea eos natus, labore similique doloremque architecto quod. Optio sint nesciunt quis repellat?',
	},

	{
		title: 'Do you offer discounts or promotions?',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim animi officia aut, error mollitia?',
	},
]

const Accordion = () => {
	return (
		<section className='my-[200px] '>
			<div className='container_'>
				<div className='text-center'>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						className='relative inline-flex flex-col accordion__sticks font-[600] text-[45px] leading-[54px] justify-center text-center  text-[#323142] mb-[90px]'
					>
						Frequently Asked
						<div className='text-[#6C5FBC]'> Questions</div>
					</motion.div>
				</div>

				<div className=' mx-auto my-4'>
					{items.map((item, index) => (
						<AccordionItem
							key={index}
							title={item.title}
							content={item.content}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Accordion
