import { Navbar } from '@/components/ui/shared/navbar'
import { getMe } from '@/service/getMe'
import React from 'react'

const AuthGroupLayout = async (
    {
        children
    }: {
        children: React.ReactNode
    }
) => {
    const user = await getMe()
  return (
    <>
    <Navbar user={user}/>
    {children}
    </>
  )
}

export default AuthGroupLayout