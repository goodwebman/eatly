import { Slider } from '@/components/ui/slider'
import CustomButton from '../CustomButton'
import CategoryItem from './CategoryItem'

const foodItems = [
	{
		id: 1,
		imgLink: '/Pizza.svg',
		name: 'Pizza',
		colors: 'bg-[#FFDE8A]/55  text-[#D69900] border-[#D69900]/50 border-[4px]',
	},
	{
		id: 2,
		imgLink: '/Hotdog.svg',
		name: 'Asian',
		colors: 'bg-[#F7C5BA]/75 text-[#FB471D] border-[#FB471D]/50 border-[4px]',
	},
	{
		id: 3,
		imgLink: '/Donat.svg',
		name: 'Donat',
		colors: 'bg-[#FFDE8A]/55  text-[#D69900] border-[#D69900]/50 border-[4px]',
	},
	{
		id: 4,
		imgLink: '/Icecream.svg',
		name: 'Ice',
		colors: 'bg-[#5A85FF]/55 text-[#002073] border-[#002073]/50 border-[4px]',
	},
]

const Category = () => {
	return (
		<section className=' rounded-[23px] p-[32px] max-[460px]:p-[20px] shadow-2xl max-[1300px]:w-[800px] max-[870px]:w-[600px] max-[700px]:w-[400px] max-[500px]:w-[300px] max-[1300px]:m-[0_auto]'>
			<div>
				<h1 className='font-[600] text-[21px] text-[#323142] mb-[17px]'>
					Category
				</h1>
				<ul className='flex justify-between gap-[10px]'>
					{foodItems.map(food => (
						<CategoryItem
							key={food.id}
							imgLink={food.imgLink}
							name={food.name}
							id={food.id}
							colors={food.colors}
						/>
					))}
				</ul>
				<div className='mb-[30px]'>
					<h1 className='font-[600] mt-[25px] text-[21px] text-[#323142] mb-[17px]'>
						Sort By
					</h1>
					<div className='flex justify-between max-[500px]:items-center'>
						<div className='text-[#ACADB9] font-[500] text-[17px] leading-[40px]'>
							<p>Recomended</p>
							<p>Most Popular</p>
						</div>

						<div className='text-[#6C5FBC] font-[500] text-[17px] leading-[30px]'>
							Fast Delivery
						</div>
					</div>
				</div>

				<div>
					<h1 className='font-[600] text-[21px] text-[#323142] mb-[17px]'>
						Price
					</h1>

					<Slider
						className='bg-[#6C5FBC]/50 rounded-full'
						defaultValue={[100]}
						max={1000}
						step={1}
					/>

					<ul className='font-[500] text-[15px] poppins flex items-center justify-between mt-[20px] text-[#C2C3CB]'>
						<li>0$</li>
						<li>25$</li>
						<li>50$</li>
						<li>100$</li>
						<li>500$</li>
						<li>1000$</li>
					</ul>
				</div>
			</div>

			<CustomButton className='w-full  !font-[500] mt-[50px]' title='Apply' />
		</section>
	)
}

export default Category
