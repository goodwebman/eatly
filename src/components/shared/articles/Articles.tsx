'use client'
import { motion } from 'framer-motion'

import Link from 'next/link'
import { useState } from 'react'
import ArticlesItem from './ArticlesItem'

export const ArticlesItems = [
	{
		id: 1,
		imgLink: '/article1.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 2,
		imgLink: '/article2.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Track The Order ?',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi illum quas officiis est sit? Blanditiis, dignissimos vitae aspernatur natus iste ratione distinctio quo earum ut deserunt error consequatur laudantium corrupti eveniet amet, molestiae assumenda molestias, corporis dolore tenetur quia aliquam. In animi assumenda consectetur temporibus laudantium a, eveniet sunt iure, nam est, voluptas voluptatem et aut neque corrupti voluptates.',
	},

	{
		id: 3,
		imgLink: '/article3.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Manage Cards ?',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 4,
		imgLink: '/article4.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'Tips & Tricks For Business',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 5,
		imgLink: '/article5.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Control Money ?',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 6,
		imgLink: '/article6.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		question: 'Top 5 Business Ideas',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 7,
		imgLink: '/article1.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'Tips & Tricks For Business',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 8,
		imgLink: '/article3.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'Tips & Tricks For Business',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 9,
		imgLink: '/article2.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
	},

	{
		id: 10,
		imgLink: '/article5.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 11,
		imgLink: '/article6.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},

	{
		id: 12,
		imgLink: '/article4.png',
		AuthorImg: '/personArticle.png',
		AuthorName: 'Perperzon',
		CreatedAt: '15 DEC, 2022',
		question: 'How To Order Food ?',
		browse:
			"Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
		selectItems:
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
		place:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore explicabo nihil alias quia eveniet laboriosam sunt rerum voluptates voluptate id!',
	},
]

const Articles = () => {
	const itemsPerPage = 6
	const [currentPage, setCurrentPage] = useState(0)

	const startIndex = currentPage * itemsPerPage
	const endIndex = Math.min(startIndex + itemsPerPage, ArticlesItems.length)
	const currentProducts = ArticlesItems.slice(startIndex, endIndex)

	const totalPages = Math.ceil(ArticlesItems.length / itemsPerPage)

	const handlePrev = () => {
		setCurrentPage(Math.max(0, currentPage - 1))
	}

	const handleNext = () => {
		setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				type: 'spring',
				stiffness: 100,
			},
		},
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
			},
		},
	}

	return (
		<section>
			<div className='container_'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.4 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								type: 'spring',
								stiffness: 100,
							},
						},
					}}
					className='text-center text-[45px] text-[#252525] font-[600] mt-[155px]'
				>
					Latest <span className='text-[#6C5FBC]'>Articles </span>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.4 }}
					className='grid grid-cols-[350px_350px_350px] max-[1200px]:grid-cols-[350px_350px] max-[780px]:grid-cols-[350px] justify-center  gap-[60px] mt-[100px]'
				>
					{currentProducts.map(article => (
						<motion.div
							key={article.id}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.4 }}
							variants={itemVariants}
						>
							<Link key={article.id} href={`/blog/${article.id}`}>
								<ArticlesItem
									key={article.id}
									id={article.id}
									imgLink={article.imgLink}
									AuthorImg={article.AuthorImg}
									AuthorName={article.AuthorName}
									CreatedAt={article.CreatedAt}
									question={article.question}
								/>
							</Link>
						</motion.div>
					))}
				</motion.div>

				<div className='flex justify-center mt-[145px] gap-[80px]'>
					<button
						onClick={handlePrev}
						disabled={currentPage === 0}
						className=' disabled:opacity-50'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-[51px] h-[65px]'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
							/>
						</svg>
					</button>
					<button
						onClick={handleNext}
						disabled={currentPage === totalPages - 1}
						className='disabled:opacity-50'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-[51px] h-[65px]'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Articles
