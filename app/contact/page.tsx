import Link from "next/link"
import React from "react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Contact
        </h1>
        <p className="text-gray-600 dark:text-gray-400">lucas.bateson@gmail.com</p>
        <p className="text-gray-600 dark:text-gray-400">Discord: battlelord_</p>
      </div>
    </section>
  )
}
