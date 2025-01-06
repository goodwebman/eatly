import Accordion from '@/components/shared/accordion/Accordion'
import Articles from '@/components/shared/articles/Articles'
import Sale from '@/components/shared/sale/Sale'
import React from 'react'

const page = () => {
  return (
    <section>
      <div className='mt-[200px]'>
				<Sale />
        <Articles />
        <Accordion />
			</div>
    </section>
  )
}

export default page