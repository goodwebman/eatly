'use client'

import { useState } from 'react'



const time = [
	{
		value: 'This month',
		ExpenseFill: '75',
		VocherFill: '55',
		ExpenseMoney: '409.00',
		VoncherMoney: '45.78',
	},
	{
		value: 'This week',
		ExpenseFill: '55',
		VocherFill: '15',
		ExpenseMoney: '219.00',
		VoncherMoney: '12.50',
	},
	{
		value: 'This year',
		ExpenseFill: '85',
		VocherFill: '45',
		ExpenseMoney: '1460.00',
		VoncherMoney: '409.00',
	},
]

const RightBoard = () => {
	const [selectedValue, setSelectedValue] = useState<string>('This month')

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value)
	}

	const currentData = time.find(item => item.value === selectedValue)
	
	return (
		<section className='flex-[0_1_47%]  shadow-2xl p-[43px] rounded-[25px] '>
			<div className='flex justify-between items-center mb-[45px]  max-[482px]:flex-col max-[482px]:gap-[10px]'>
				<h3 className='font-[600] text-[28px] text-[#1a202c] m-0 '>
					Purchases
				</h3>

				<select
					id='time-select'
					className='font-[500] focus:outline-[#6b5fbc] text-[19px] leading-[0.6px] text-[#1a202c] p-[12px_18px]   bg-[#fafafa] rounded-[13px] cursor-pointer'
					value={selectedValue}
					onChange={handleChange}
				>
					{time.map(item => (
						<option key={item.value} value={item.value}>
							{item.value.charAt(0).toUpperCase() + item.value.slice(1)}
						</option>
					))}
				</select>
			</div>
			<ul>
				<li className='relative flex flex-wrap justify-between items-center border-[1px] border-[#edf2f7] rounded-[19px] p-[25px_25px_55px] '>
					{/* before tailwind */}
					<div className="absolute bottom-6 left-6 right-6 h-[9.42px]  bg-[#6b5fbc] rounded-full content-[''] opacity-[0.2]"></div>

					{/* after tailwind */}
					<div className={`absolute bottom-6 left-6 right-6 h-[9.42px]  bg-[#6b5fbc] rounded-full content-[''] `} style={{ width: `${currentData?.ExpenseFill}%` }}></div>

					<div className='flex items-center gap-[20px]'>
						<span className='purchase__graph-icon bg-[#f4f0ff] purchase__graph-icon-wallet'></span>
						<div>
							<h4 className='font-[600] text-[19px] text-[#1A202C] m-[0_0_7px]'>
								Expense
							</h4>
							<p className='font-[400] text-[18px] text-[#A0AEC0] m-0'>
								Increased By 10%
							</p>
						</div>
					</div>
					<div className='font-[600] text-[22px] text-[#1a202c]'>
						${currentData?.ExpenseMoney}
					</div>
				</li>
				<li className='relative flex flex-wrap justify-between items-center border-[1px] border-[#edf2f7] rounded-[19px] p-[25px_25px_55px] '>
					{/* before tailwind */}
					<div className="absolute bottom-6 left-6 right-6 h-[9.42px]  bg-[#fbac18] rounded-full content-[''] opacity-[0.2]"></div>

					{/* after tailwind */}
					<div className={`absolute bottom-6 left-6 right-6 h-[9.42px]  bg-[#fbac18] rounded-full content-[''] `} style={{ width: `${currentData?.VocherFill}%` }}></div>

					<div className='flex items-center gap-[20px]'>
						<span className='purchase__graph-icon bg-[#f2fdf6] purchase__graph-icon-money'></span>
						<div>
							<h4 className='font-[600] text-[19px] text-[#1A202C] m-[0_0_7px]'>
								Vocher Usage
							</h4>
							<p className='font-[400] text-[18px] text-[#A0AEC0] m-0'>
								Increased By 10%
							</p>
						</div>
					</div>
					<div className='font-[600] text-[22px] text-[#1a202c]'>
						${currentData?.VoncherMoney}
					</div>
				</li>
			</ul>
		</section>
	)
}

export default RightBoard
