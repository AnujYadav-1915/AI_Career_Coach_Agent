import {Button} from '@/components/ui/button'
import React from 'react'

function WelcomeBanner() {
    return(
        <div className='p-6 bg-slate-900 rounded-xl border border-slate-800 shadow-sm'>
            <h2 className='font-bold text-2xl text-white mb-2'> AI Career Coach Agent</h2>
            <p className='text-slate-300 leading-relaxed'>Smarter career decisions start here — get tailored advice, real-time market insights, and a roadmap built just for you with the power of AI.</p>
            <Button variant={'secondary'} className='mt-4 bg-white text-slate-900 hover:bg-slate-100'>
                Let's Get Started 
            </Button>
        </div>
    )
}

export default WelcomeBanner