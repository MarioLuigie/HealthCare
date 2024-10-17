// lib
import { Icons } from "@/lib/constants"

export const UserDropDownMenuItems = [
  { title: "Profile", image: Icons.PROFILE_ICON.path },
  { title: "Account", image: Icons.ACCOUNT_ICON.path },
  { title: "Settings", image: Icons.SETTINGS_ICON.path },
]

export const MainMenuItems = [
  {
    icon: Icons.DASHBOARD_ICON.path,
    name: "Dashboard",
    path: "/dashboard",
    subMainMenu: [
      {
        name: "Health Summary",
        path: "/dashboard/summary",
        icon: Icons.DOT_ICON.path,
      },
      { name: "Charts", path: "/dashboard/charts", icon: Icons.DOT_ICON.path },
      {
        name: "Health Alerts",
        path: "/dashboard/alerts",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  {
    icon: Icons.TEST_RESULT_ICON.path,
    name: "Test Results",
    path: "/results",
    subMainMenu: [
      {
        name: "Laboratory Tests",
        path: "/results/laboratory",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Imaging Diagnostics",
        path: "/results/imaging",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Specialist Tests",
        path: "/results/specialist",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Results History",
        path: "/results/history",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  {
    icon: Icons.TREATMENT_HISTORY_ICON.path,
    name: "Treatment History",
    path: "/treatment-history",
    subMainMenu: [
      {
        name: "Past Illnesses",
        path: "/treatment-history/diseases",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Hospitalizations",
        path: "/treatment-history/hospitalizations",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Medication History",
        path: "/treatment-history/medications",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Medical Procedures",
        path: "/treatment-history/procedures",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  {
    icon: Icons.APPOINTMENT_ICON.path,
    name: "Appointments",
    path: "/appointments",
    subMainMenu: [
      {
        name: "Upcoming Appointments",
        path: "/appointments/upcoming",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Schedule Appointment",
        path: "/appointments/schedule",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Appointment History",
        path: "/appointments/history",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Online Consultations",
        path: "/appointments/online-consultation",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  {
    icon: Icons.CHAT_ICON.path,
    name: "Communication",
    path: "/communication",
    subMainMenu: [
      {
        name: "Chat with Doctor",
        path: "/communication/chat",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Emails and Notifications",
        path: "/communication/emails",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Online Consultations",
        path: "/communication/online-consultation",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  {
    icon: Icons.DOC_MED_ICON.path,
    name: "Medical Documentation",
    path: "/medical-records",
    subMainMenu: [
      {
        name: "Electronic Records",
        path: "/medical-records/electronic",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Prescriptions",
        path: "/medical-records/prescriptions",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Doctor's Notes",
        path: "/medical-records/notes",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  {
    icon: Icons.BICYCLE_ICON.path,
    name: "Lifestyle and Prevention",
    path: "/lifestyle",
    subMainMenu: [
      {
        name: "Health Journal",
        path: "/lifestyle/health-journal",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Health Tips",
        path: "/lifestyle/tips",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Treatment Plan",
        path: "/lifestyle/treatment-plan",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  // {
  //   icon: Icons.DASHBOARD_ICON.path,
  //   name: "Account Settings",
  //   path: '/account-settings',
  //   subMainMenu: [
  //     { name: "Patient Profile", path: '/account-settings/profile' },
  //     { name: "Security Settings", path: '/account-settings/security' },
  //     { name: "Access Permissions", path: '/account-settings/access-permissions' }
  //   ]
  // },
  {
    icon: Icons.BELL_ICON.path,
    name: "Notification System",
    path: "/notifications",
    subMainMenu: [
      {
        name: "Appointment Reminders",
        path: "/notifications/appointments",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "New Test Results",
        path: "/notifications/new-results",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Health Alerts",
        path: "/notifications/health-alerts",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  {
    icon: Icons.DEVICE_ICON.path,
    name: "Device Integration",
    path: "/devices",
    subMainMenu: [
      {
        name: "Wearable Devices",
        path: "/devices/wearable",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "App Data",
        path: "/devices/app-data",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
  {
    icon: Icons.CASH_ICON.path,
    name: "Billing and Insurance",
    path: "/billing",
    subMainMenu: [
      {
        name: "Invoices",
        path: "/billing/invoices",
        icon: Icons.DOT_ICON.path,
      },
      {
        name: "Health Insurance",
        path: "/billing/insurance",
        icon: Icons.DOT_ICON.path,
      },
    ],
  },
]
