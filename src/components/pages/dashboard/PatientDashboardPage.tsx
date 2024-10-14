// modules
import auth from '@/auth'
// lib
import { getPatient } from '@/lib/actions/patient.actions'
// components
import CreatePatient from '@/components/content/dashboards/patient/CreatePatient'
import CreateAppointment from '@/components/content/dashboards/patient/CreateAppointment'
import VerifyUserRequest from '@/components/content/dashboards/patient/VerifyUserRequest'
import Card from '@/components/shared/Card'

export default async function PatientDashboardPage({
  params,
  sessionUser,
}: {
  params: SingleSlugParams;
  sessionUser: any;
}) {
  const isSessionUserVerified: boolean = await auth.checkIsSessionUserVerified();
  const { data: patient } = await getPatient(sessionUser.$id);

  return (
    <div className="flex flex-col items-center justify-center grow px-4 py-8">
      {!isSessionUserVerified && <VerifyUserRequest />}
      {isSessionUserVerified && !patient && (
        <CreatePatient sessionUser={sessionUser} />
      )}
      {isSessionUserVerified && patient && (
        <div className="flex flex-col grow w-full">
          <div className="flex gap-4 w-full">
            <Card title="User Info" className="grow">
              <div></div>
            </Card>
            {/* Usunięcie w-[50%] i zmiana na w-full */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {/* <Card title="Health Alerts" className="grow min-h-[200px]">
                <div></div>
              </Card>
              <Card title="Health Summary" className="grow min-h-[200px]">
                <div></div>
              </Card>
              <Card title="Current Appointments" className="grow min-h-[200px]">
                <div></div>
              </Card>
              <Card title="Charts" className="grow min-h-[200px]">
                <div></div>
              </Card> */}
            </div>
          </div>
          <CreateAppointment sessionUser={sessionUser} />
        </div>
      )}
    </div>
  );
}

