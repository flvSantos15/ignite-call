/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router'
import { TextInput, Button, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormAnnotation } from './styles'

const claimUsernameSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.'
    })
    .transform((username) => username.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameSchema>

export function ClaimUsernameForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameSchema)
  })

  const handleClaimUsername = async (data: ClaimUsernameFormData) => {
    try {
      const { username } = data

      await router.push(`/register?username=${username}`)
    } catch (error) {
      console.log('error in handleClaimUsername', error)
    }
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado.'}
        </Text>
      </FormAnnotation>
    </>
  )
}
