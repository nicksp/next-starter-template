import { Card, CardBody } from '@heroui/react'
import { IconDeviceUnknown } from '@tabler/icons-react'

export default function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <p className="flex items-center justify-center gap-2 text-2xl">
          <IconDeviceUnknown />
          This page cannot be found
        </p>
      </CardBody>
    </Card>
  )
}
