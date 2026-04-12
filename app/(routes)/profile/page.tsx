export const dynamic = 'force-dynamic';

import { UserProfile } from '@/lib/clerk-client'
import React from 'react'

function Profile() {
    return(
        <div>
            <UserProfile />

        </div>
    )

}


export default Profile