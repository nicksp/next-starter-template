import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'

import db from '@/db'

import GuestbookForm from './guestbook-form'

export default async function GuestbookPage() {
  const entries = await db.query.guestbookEntries.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt)
    },
    with: { user: true },
  })
  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardBody>
        <h1 className="text-center text-5xl">Welcome aboard!</h1>
        <GuestbookForm />
      </CardBody>
      {entries.map((entry) => (
        <Card key={entry.id} className="m-2">
          <CardBody>
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src={entry.user.image ?? ''}
                />
                <div className="flex flex-col items-start justify-center gap-1">
                  <h4 className="text-small text-default-600 leading-none font-semibold">
                    {entry.user.name}
                  </h4>
                  <h5 className="text-small text-default-400 tracking-tight">
                    {entry.user.email}
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="text-small text-default-400 px-3 py-0">
              <p>{entry.message}</p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="text-small text-default-400">
                  {entry.createdAt.toLocaleString()}
                </p>
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      ))}
    </Card>
  )
}
