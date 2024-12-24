'use client'

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export const Search = () => {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const search = new FormData(e.currentTarget).get('search') as string
    router.push(`/search?q=${search}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center gap-2"
    >
      <Input className="w-full" placeholder="Search movies..." name="search" />
      <Button variant="outline">Search</Button>
    </form>
  )
}
