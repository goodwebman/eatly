interface ProductProps {
	id: string
	name: string
	time: string
	imgLink: string
	status: string
}

const DashboardCart = ({ id, name, time, imgLink, status }: ProductProps) => {
	return (
		<li className='shadow-lg mb-[10px] bg-white rounded-[16px] p-[5px_15px] flex items-center'>
			<div className='max-w-[23%] mr-[20px]'>
				<img className='max-w-full' src={imgLink} alt={name} />
			</div>
			<div className='w-full'>
				<h2 className='poppins font-[600] text-[16px] text-[#323142] m-[0_0_5px]'>
					{name}
				</h2>
				<p
					className={`${id === '02' ? 'text-[#fb461d]' : '!text-[#309d5c]'} ${
						id === '01' ? '!text-[#323142]' : ''
					} poppins font-[500] text-[10px] text-[#323142] m-[0_0_5px]`}
				>
					{status}
				</p>
				<div className='text-right poppins font-[500] text-[11px] text-[#acadb9]'>
					{time}
				</div>
			</div>
		</li>
	)
}

export default DashboardCart
