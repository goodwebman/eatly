const PricingGUI = () => {
	return (
		<section className='mb-[600px] max-[1000px]:mb-[300px] max-[720px]:mb-[100px]'>
			<div className='container_ '>
				<div className='w-full bg-[#5C4EAE] h-[335px] relative '>
					<h1 className=' text-center relative pt-[44px] font-[600] text-[40px] text-white pricing_arrow'>
						Our Pricing
					</h1>
					<div className='absolute top-[122px] max-[1200px]:w-[900px] max-[1000px]:w-[600px] max-[720px]:w-[400px] max-[500px]:w-[300px] max-[500px]:top-[200px] max-[400px]:w-[250px] max-[400px]:top-[190px] max-[400px]:left-[40px] left-[80px] overflow-hidden pricing-sticks '>
						<img
							className=''
							src='/pricing-dashboard.png'
							alt='pricing-dashboard'
							draggable="false"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingGUI
