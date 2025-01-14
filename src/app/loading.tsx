import { CircularProgress } from '@nextui-org/react'

export default function Loading() {
  return (
    <CircularProgress
      className="mx-auto"
      classNames={{
        svg: 'h-36 w-36',
      }}
      aria-label="Loading page..."
    />
  )
}
