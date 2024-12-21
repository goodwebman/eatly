import Accordion from '@/components/components/accordion/Accordion'
import Articles from '@/components/components/articles/Articles'
import Sale from '@/components/components/sale/Sale'
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