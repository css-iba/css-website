import DataTable from '@/components/Home/Launch/DataTable'
import { GetData as fetchRegistrations } from '@/app/Launch/Supabase/api'

// Server component that fetches registration rows and passes them to the DataTable
export default async function GetData() {
  const res = await fetchRegistrations()
  const rows = res?.data ?? []

  return (
    <main className="min-h-screen p-8 colour-bg">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-heading font-extrabold mb-6 colour-text">Registrations</h2>
        <div className="bg-white rounded-xl shadow p-4">
          <DataTable data={rows} />
        </div>
      </div>
    </main>
  )
}
