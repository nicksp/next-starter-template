import { Card, CardBody, User } from '@nextui-org/react'
import { getServerSession } from 'next-auth'

import options from '@/config/auth'

export default async function ProfilePage() {
  const session = await getServerSession(options)

  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <User
          avatarProps={{
            showFallback: !session?.user?.image,
            src: session?.user?.image ?? '',
          }}
          description={session?.user?.email}
          name={session?.user?.name}
        />
      </CardBody>
    </Card>
  )
}
