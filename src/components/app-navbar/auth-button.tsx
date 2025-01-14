'use client'

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { IconBrandGoogle } from '@tabler/icons-react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton({
  minimal = true,
}: Readonly<{ minimal?: boolean }>) {
  const { data, status } = useSession()

  if (status === 'loading') {
    return <CircularProgress />
  }

  if (status === 'authenticated') {
    const handleSignOut = () => signOut({ callbackUrl: '/' })

    if (minimal) {
      return (
        <Button color="danger" variant="ghost" onPress={handleSignOut}>
          <IconBrandGoogle />
          Sign out
        </Button>
      )
    }

    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            src={data.user?.image ?? ''}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownItem>
          <DropdownItem key="sign-out" color="danger" onPress={handleSignOut}>
            Sign out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  return (
    <Button
      color="danger"
      variant="ghost"
      onPress={() =>
        signIn('google', {
          callbackUrl: '/profile',
        })
      }
    >
      <IconBrandGoogle />
      Sign in
    </Button>
  )
}
