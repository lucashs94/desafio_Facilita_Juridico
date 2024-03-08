import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { toast } from 'sonner'

import { formatPhone } from '@/utils/phoneFormatter'

import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import {
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerTitle,
  Drawer,
} from './ui/drawer'
import { useClientStore } from '@/stores/clientStore'

interface FormProps {
  openDrawer: boolean
  onToggle: (state: boolean) => void
}

export function DrawerForm({ openDrawer, onToggle }: FormProps) {
  const { addClient } = useClientStore((state) => {
    return { addClient: state.add }
  })

  const [phone, setPhone] = useState('')

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const xRef = useRef<HTMLInputElement>(null)
  const yRef = useRef<HTMLInputElement>(null)

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(event.target.value)
    setPhone(formatted)
  }

  async function handleCreateClient(e: FormEvent) {
    e.preventDefault()

    if (
      !nameRef.current ||
      !emailRef.current ||
      phone === '' ||
      !xRef.current ||
      !yRef.current
    ) {
      toast.error('All fiels should be filled')
      return
    }

    try {
      await addClient({
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phone,
        x: Number(xRef.current.value),
        y: Number(yRef.current.value),
      })

      nameRef.current.value = ''
      emailRef.current.value = ''
      setPhone('')
      xRef.current.value = ''
      yRef.current.value = ''

      onToggle(false)

      toast.success('Client added successfully 🎉🎉🎉')
    } catch (error) {
      toast.error('Something wrong happened 😣. Try later!')
    }
  }
  return (
    <Drawer
      direction="right"
      open={openDrawer}
      onOpenChange={onToggle}
    >
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-black/40" />
        <DrawerContent className="bg-white flex flex-col w-[400px] h-full right-0 overflow-hidden">
          <div className="px-4 py-12 flex-1 h-full space-y-10">
            <DrawerTitle className="font-bold text-4xl dark:text-background">
              New Client
            </DrawerTitle>
            <form
              onSubmit={handleCreateClient}
              className="space-y-8"
            >
              <div>
                <Label
                  htmlFor="name"
                  className="text-lg dark:text-background"
                >
                  Name
                </Label>
                <Input
                  ref={nameRef}
                  id="name"
                  className="flex-1 my-1 dark:text-background"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-lg dark:text-background"
                >
                  Email
                </Label>
                <Input
                  ref={emailRef}
                  id="email"
                  className="flex-1 my-1 dark:text-background"
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-lg dark:text-background"
                >
                  Phone
                </Label>
                <Input
                  id="phone"
                  className="flex-1 my-1 dark:text-background"
                  placeholder="(xx) xxxxx-xxxx"
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div>
                <Label
                  htmlFor="x"
                  className="text-lg dark:text-background"
                >
                  X coordinate
                </Label>
                <Input
                  ref={xRef}
                  id="x"
                  className="flex-1 my-1 dark:text-background"
                  placeholder="35.098765"
                  type="number"
                />
              </div>
              <div>
                <Label
                  htmlFor="y"
                  className="text-lg dark:text-background"
                >
                  Y coordinate
                </Label>
                <Input
                  ref={yRef}
                  id="y"
                  className="flex-1 my-1 dark:text-background"
                  placeholder="-45.763849"
                  type="number"
                />
              </div>

              <Button
                onClick={handleCreateClient}
                className="float-right dark:bg-background dark:text-foreground"
              >
                Add client
              </Button>
            </form>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
