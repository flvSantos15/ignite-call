/* eslint-disable prettier/prettier */
import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList
} from './styles'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

export function CalendarStep() {
  const router = useRouter()
  const { username } = router.query
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState(null)

  const isDaySelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const getAvailability = async () => {
    const { data } = await api.get(`/users/${username}/availabillity`, {
      params: {
        date: dayjs(selectedDate).format('YYYY-MM-DD')
      }
    })

    console.log(data)
  }

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    getAvailability()
  }, [selectedDate, username])

  return (
    <Container isTimePickerOpen={isDaySelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDaySelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>09:00h</TimePickerItem>
            <TimePickerItem>10:00h</TimePickerItem>
            <TimePickerItem>11:00h</TimePickerItem>
            <TimePickerItem>12:00h</TimePickerItem>
            <TimePickerItem>13:00h</TimePickerItem>
            <TimePickerItem>14:00h</TimePickerItem>
            <TimePickerItem>15:00h</TimePickerItem>
            <TimePickerItem>16:00h</TimePickerItem>
            <TimePickerItem>17:00h</TimePickerItem>
            <TimePickerItem>18:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
