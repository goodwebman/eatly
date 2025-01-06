'use client'

import { useState } from 'react'

const MenuSale = () => {
	const [isHovered, setIsHovered] = useState(false)
	const [selectedButton, setSelectedButton] = useState<'Food' | 'Restaurant'>(
		'Food'
	)

	const handlerSelectButton = (button: 'Food' | 'Restaurant') => {
		setSelectedButton(button)
	}

	return (
		<section className='max-[1300px]:m-[0_auto]'>
			<div className='sale__inner-menu max-w-[758px] h-[251px] max-[700px]:h-[170px] flex flex-col relative menu__food mb-[170px]  max-[1300px]:mb-[70px] select-none '>
				<div className='absolute font-[800] max-[560px]:left-[20px] text-[75px] max-[700px]:text-[50px] max-[560px]:text-[40px] text-white '>
					50% OFF
				</div>
				<div className='absolute bottom-[30px] max-[700px]:bottom-[20px] max- font-[800] text-[87px] max-[700px]:text-[50px] max-[560px]:left-[20px] max-[560px]:bottom-[30px] max-[560px]:text-[40px] text-[#7C6FCD]'>
					WEEKENDS
				</div>
			</div>

			<div className='max-w-[758px] '>
				<form
					className='flex mb-[40px] p-[18px_28px] gap-[30px] items-center rounded-2xl bg-[#EDEDED] max-[560px]:w-[265px] 
					'
					action=''
				>
					<button>
						<img src='/search.svg' alt='search' />
					</button>

					<input
						className=' bg-[#EDEDED] p-[3px] placeholder:font-[500] placeholder:text-[18px] focus:text-[#6c5fbc] focus:font-[500] focus:text-[18px] placeholder:text-[#AAABBA]  rounded-2xl w-full '
						type='text'
						placeholder='Search'
					/>
				</form>

				<div className='flex '>
					<button
						onClick={() => handlerSelectButton('Food')}
						onMouseEnter={() => setIsHovered(true)}
						className={` ${
							isHovered ? 'bg-[#6C5FBC] text-white' : 'bg-white text-[#6C5FBC]'
						} max-w-[380px] border-r-0 border-[#6C5FBC] rounded-[20px_0_0_20px] border-[2px] max-[870px]:p-[21px_120px] max-[700px]:p-[21px_90px] max-[780px]:p-[21px_90px  duration-700 p-[21px_165px] text-[20px] font-[500] max-[560px]:p-[16px_40px] `}
					>
						Food
					</button>

					<button
						onClick={() => handlerSelectButton('Restaurant')}
						onMouseEnter={() => setIsHovered(false)}
						className={` ${
							isHovered ? 'bg-white text-[#6C5FBC]' : 'bg-[#6C5FBC] text-white'
						} max-w-[380px] border-[#6C5FBC] border-[2px] border-l-0 rounded-[0_20px_20px_0] text-center max-[870px]:p-[21px_120px] max-[700px]:p-[21px_50px] max-[780px]:p-[21px_90px] text-[20px] font-[500] p-[21px_135px]  duration-700 max-[560px]:p-[16px_10px] max-[560px]:m-[auto_0] `}
					>
						Restaurant
					</button>
				</div>
			</div>
		</section>
	)
}

export default MenuSale
