import { SignIn } from '@/lib/clerk-client'

export default function Page() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <SignIn />
        </div>
    )
}