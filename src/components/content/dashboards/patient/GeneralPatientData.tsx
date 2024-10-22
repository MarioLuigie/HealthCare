import Avatar from '@/components/content/Avatar'
import { Droplets } from 'lucide-react'

export default function GeneralPatientData({
	user,
	patient,
}: {
	user: any
	patient: any
}) {
	return (
		<div>
			<div className="flex justify-between items-center">
				<Avatar user={user} />
				<div className="flex gap-1 items-center">
					<Droplets color="red" />
					<p>
						BT: <span className="font-semibold">0Rh+</span>
					</p>
				</div>
			</div>
			<div className="mt-6 space-y-2">
				<p>
					Primary Physician:{' '}
					<span className="font-semibold">
						dr. {patient.primaryPhysician}
					</span>
				</p>
				<p>
					Policy Provider:{' '}
					<span className="font-semibold">
						{patient.insuranceProvider}
					</span>
				</p>
				<p>
					Policy Number:{' '}
					<span className="font-semibold">
						{patient.insurancePolicyNumber}
					</span>
				</p>
			</div>
		</div>
	)
}

// Patient: {
//   success: true,
//   data: {
//     email: 'mk.lotocki@gmail.com',
//     phone: '+48123456789',
//     userId: '6707e7d100080e75d978',
//     name: 'Mariusz Lotocki',
//     privacyConsent: true,
//     gender: 'Male',
//     birthDate: '1900-01-01',
//     address: 'Test12 th',
//     occupation: 'Test',
//     emergencyContactName: 'Test',
//     emergencyContactNumber: '+48123456789',
//     insuranceProvider: 'Test',
//     insurancePolicyNumber: '123456789',
//     allergies: '',
//     currentMedication: '',
//     familyMedicalHistory: '',
//     pastMedicalHistory: '',
//     identificationType: 'Birth Certificate',
//     identificationNumber: '1234656789',
//     primaryPhysician: 'John Green',
//     treatmentConsent: true,
//     disclosureConsent: true,
//     '$id': '6708fadd0039b3ba534a',
//     '$createdAt': '2024-10-11T10:15:58.005+00:00',
//     '$updatedAt': '2024-10-11T11:35:08.522+00:00',
//     '$permissions': [],
//     identificationDocuments: [],
//     appointments: [ [Object] ],
//     '$databaseId': '66d9d80a003917942dd6',
//     '$collectionId': '66d9d8ad002494cdef91'
//   },
//   message: 'Patient loaded successfully.'
// }
