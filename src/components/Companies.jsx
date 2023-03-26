import Image from 'next/image'
import React from 'react'
import brand1 from "../app/assets/company-logo-1.png"
import brand2 from "../app/assets/company-logo-2.png"
import brand3 from "../app/assets/company-logo-3.png"
import brand4 from "../app/assets/company-logo-4.png"

const Companies = () => {
  return (
    <section className='w-full bg-white py-[50px]'>
        <div className="md:max-w-[1280px] max-w-[600px] m-auto ">

            <h1 className='text-center text-2xl font-bold text-[#536e96] py-[50px]'>In partnerschap met de mooiste bedrijven</h1>
            <p className='text-center text-[#536e96] text-xl'>Hieronder vind je alle merken met wie wij allemaal samen werken voor nu en later</p>
            

            <div className='flex justify-center py-8 md:gap-8'>
                <Image src={brand1} alt='this is brand1'/>
                <Image src={brand2} alt='this is brand1'/>
                <Image src={brand3} alt='this is brand1'/>
                <Image src={brand4} alt='this is brand1'/>
            </div>


        </div>

    </section>
  )
}

export default Companies