import CustomButton from '../CustomButton'

const Sale = () => {
	return (
		<section className='mb-[100px]'>
			<div className='container_'>
				<div className='sale__inner'>
					<h2 className='uppercase font-[800] text-[70px] text-white m-[0_0_20px] poppins'>
						Get 50%
					</h2>
					<form className='inline-block relative' action='# '>
						<input
							className='w-[440px] h-[68px] bg-white shadow-2xl rounded-[14px] poppins text-[16px] leading-[0.03em] text-[#878787] pl-[20px]'
							type='email'
							name='email'
							placeholder='Enter Your Email Adress'
						/>

						<div className='sale__button'>
							<CustomButton className='text-[15px] p-[15px_25px] rounded-[11px] !font-[500] focus:border-none placeholder:text-[#6b5fbc]' title='SUBSCRIBE' />
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Sale
