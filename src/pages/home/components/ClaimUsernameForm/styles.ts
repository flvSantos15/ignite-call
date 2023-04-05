/* eslint-disable prettier/prettier */
import { Box, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@medai(max-wdith: 600px)': {
    gridTemplateColumns: '1fr'
  }
})
