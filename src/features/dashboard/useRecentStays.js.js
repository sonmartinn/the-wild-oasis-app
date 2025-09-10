import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import { useSearchParams } from 'react-router-dom'
import { getStaysAfterDate } from '../../services/apiBookings'

export function useRecentStays() {
  const [searchParams] = useSearchParams()

  const numDays = Number(searchParams.get('last') || '7')

  const queryDate = subDays(new Date(), numDays).toISOString()

  const { isPending, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ['stays', `last-${numDays}`]
  })

  const confirmedStays = stays?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out'
  )

  return { isPending, stays, confirmedStays, numDays }
}
