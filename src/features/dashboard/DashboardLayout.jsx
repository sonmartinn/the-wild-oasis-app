import styled from 'styled-components'
import Spinner from '../../ui/Spinner'
import Stats from './Stats.jsx'
import { useRecentBookings } from './useRecentBookings'
import { useRecentStays } from './useRecentStays.js'
import { useCabins } from '../cabins/useCabins'
import SaleChart from './SalesChart.jsx'
import DurationChart from './DurationChart.jsx'
import TodayActivity from '../check-in-out/TodayActivity.jsx'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { bookings, isPending: isLoading1 } = useRecentBookings()
  const { confirmedStays, isPending: isLoading2, numDays } = useRecentStays()
  const { cabins, isPending: isLoading3 } = useCabins()

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SaleChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
