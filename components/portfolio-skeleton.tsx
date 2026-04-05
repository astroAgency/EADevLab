"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function PortfolioSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden"
        >
          <div className="p-6 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <Skeleton className="h-8 w-32 mb-6" />
            <Skeleton className="h-6 w-24 rounded-full mb-6" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-20 w-full mb-8" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="relative min-h-[200px] sm:min-h-[250px] md:min-h-[500px] order-1 md:order-2">
            <Skeleton className="absolute inset-0" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ArticlesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden">
        <Skeleton className="h-[300px] w-full" />
        <div className="p-6">
          <Skeleton className="h-6 w-24 rounded-full mb-4" />
          <Skeleton className="h-8 w-full mb-2" />
          <Skeleton className="h-8 w-3/4" />
        </div>
      </div>
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white border-[3px] border-black rounded-[32px] p-6 flex gap-4">
            <Skeleton className="w-24 h-24 rounded-xl flex-shrink-0" />
            <div className="flex-1">
              <Skeleton className="h-5 w-20 rounded-full mb-3" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
