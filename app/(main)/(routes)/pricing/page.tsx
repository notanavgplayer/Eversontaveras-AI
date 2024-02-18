import Header from '@/components/ui/header'
import { pricingPlans } from '@/lib/pricing-plans'

export default function PricingPlans() {
  return (
    <div>
      <Header />
      <div data-aos="fade-up"
        data-aos-duration="1000" className='grid lg:grid-cols-3 gap-12 lg:gap-8 py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
        {pricingPlans.map(plan => (
          <div key={plan.title} className='border border-slate-200 p-8 shadow-lg  bg-white rounded-2xl relative flex flex-col'
          >
            <h3 className='text-lg font-semibold leading-5 text-black'>{plan.title}</h3>
            {plan.mostPopular && (
              <p className='absolute top-0 -translate-y-1/2 bg-indigo-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md'>Most Popular</p>
            )}
            <p className='mt-4 text-slate-700 text-sm leading-6'>
              {plan.description}
            </p>
            <div className='mt-4 bg-slate-50 p-6 rounded-lg text-black -mx-6'>
              <p className='text-sm font-semibold text-slate-500 flex items-center'>
                <span>{plan.currency}</span>
                <span className='text-4xl text-slate-900 ml-3'>{plan.price}</span>
                <span className='ml-1.5'>{plan.frequency}</span>
              </p>
            </div>
            <div>
              <ul className='text-black mt-6 space-y-4 flex-1'>
                {plan.features.map(feature => (
                  <li key={feature} className='text-sm text-slate-700 leading-6 flex'>
                    <svg className='h-5 w-5 text-indigo-500 shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    <span className='ml-3'>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`text-white bg-indigo-500 hover:bg-indigo-600 mt-8 block text-sm font-semibold leading-4 text-center  rounded-lg shadow-md px-6 py-4
            ${plan.mostPopular
                  ? 'text-white bg-indigo-500 hover:bg-indigo-600 shadow-md'
                  : 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100'
                }
            `}
              >
                {plan.cta}</a>
            </div>
          </div>
        ))
        }
      </div >
    </div>
  )
}