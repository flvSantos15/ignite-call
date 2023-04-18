/* eslint-disable prettier/prettier */
import { Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 852,
  paddingTop: '0 $34',
  margin: '$20 auto $4'
})

export const UserHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [`> ${Heading}`]: {
    lineHeight: '$base',
    marginTop: '$2'
  },

  [`> ${Text}`]: {
    color: '$gray200'
  }
})
