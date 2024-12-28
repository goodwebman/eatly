import Dashboard from '@/components/shared/dashboard/Dashboard'
import PricingGUI from '@/components/shared/ourPricing/PricingGUI'
import PricingTablet from '@/components/shared/ourPricing/PricingTablet'
import PricingTabletMobile from '@/components/shared/ourPricing/PricingTabletMobile'
import Review from '@/components/shared/review/Review'

const Pricing = () => {
	return (
		<section>
			<div className='my-[200px]'>
				<PricingGUI />
				<div className='hidden min-[1200px]:block'>
					<PricingTablet />
				</div>
				<div className='block min-[1200px]:hidden'>
					<PricingTabletMobile />
				</div>
				<Dashboard />
				<Review />
			</div>
		</section>
	)
}

export default Pricing
