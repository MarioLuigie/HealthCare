import { Models } from 'node-appwrite'

// Appwrite output interfaces based on Models.Document template - ensures compatibility and access to hidden functions and keys
// Interfaces for appwrite data base collections documents
export interface Patient extends Models.Document {
	userId: string
	name: string
	email: string
	phone: string
	birthDate: Date
	gender: Gender
	address: string
	occupation: string
	emergencyContactName: string
	emergencyContactNumber: string
	primaryPhysician: string
	insuranceProvider: string
	insurancePolicyNumber: string
	allergies: string | undefined
	currentMedication: string | undefined
	familyMedicalHistory: string | undefined
	pastMedicalHistory: string | undefined
	identificationType: string | undefined
	identificationNumber: string | undefined
	identificationDocument: FormData | undefined
	privacyConsent: boolean
}

export interface Appointment extends Models.Document {
	patient: Patient
	schedule: Date
	status: Status
	primaryPhysician: string
	reason: string
	note: string
	userId: string
	cancellationReason: string | null
}

{
	/* 
Twój kod w pliku appwrite.type.ts definiuje interfejsy TypeScript dla obiektów w aplikacji używającej Next.js i Appwrite. Oto co te interfejsy oznaczają:

    Interfejs Patient:
        Rozszerza Models.Document z node-appwrite, co oznacza, że jest to dokument w bazie danych Appwrite.
        Reprezentuje pacjenta z różnymi atrybutami, takimi jak userId, name, email, phone, oraz informacje zdrowotne i kontaktowe.
        Zawiera też opcjonalne pola dla alergii, aktualnych leków, historii medycznej, oraz dokumentów tożsamości.
        FormData w polu identificationDocument sugeruje, że może zawierać dane plików, które są przesyłane w formularzu.

    Interfejs Appointment:
        Również rozszerza Models.Document i reprezentuje wizytę pacjenta.
        Zawiera odniesienie do obiektu Patient, co może oznaczać, że każda wizyta jest związana z jednym pacjentem.
        Zawiera informacje o terminie wizyty (schedule), statusie (status), lekarzu prowadzącym (primaryPhysician), oraz powód wizyty (reason) i dodatkowe uwagi (note).
        Może także zawierać powód anulowania wizyty (cancellationReason), jeśli wizyta została odwołana.

W skrócie, te interfejsy są używane do definiowania struktury danych, które będą przechowywane w bazie danych Appwrite w kontekście zarządzania pacjentami i ich wizytami. Użycie node-appwrite sugeruje, że korzystasz z SDK Appwrite do integracji z bazą danych w aplikacji Node.js.
You said:
nie rozumiem. Wczesniej w platformie Appwrite dodawałem atrybuty dla dokumentu w kolekcji patient. To skad teraz wie ze Models,Document to patient a ponizej Models.Document to appointmen? 
ChatGPT said:
ChatGPT

Rozumiem, jak to może być mylące. W Appwrite, kiedy definiujesz dokumenty w kolekcji, każdy dokument ma strukturę opartą na zdefiniowanych przez Ciebie atrybutach. Typowanie w TypeScript, które masz w appwrite.type.ts, jest stosowane do weryfikacji struktury danych w kodzie, ale nie jest bezpośrednio związane z tym, jak Appwrite przechowuje dane.

W Twoim przypadku:

    Definiowanie Interfejsów TypeScript:
        Models.Document z node-appwrite to ogólny typ dokumentu w Appwrite. W kodzie TypeScript używasz Models.Document jako podstawy, aby stworzyć bardziej szczegółowy typ dla dokumentu w Twojej aplikacji.
        Patient i Appointment to konkretne interfejsy, które rozszerzają Models.Document o dodatkowe atrybuty specyficzne dla tych typów dokumentów.

    Typowanie i Struktura Dokumentów:
        Kiedy tworzysz kolekcję i dokumenty w Appwrite, definiujesz atrybuty dokumentów za pomocą interfejsów w TypeScript, aby zapewnić, że dane przechowywane w bazie danych są zgodne z oczekiwaną strukturą.
        Models.Document nie jest bezpośrednio związany z Twoją kolekcją w Appwrite, ale stanowi bazę dla typu dokumentu, który jest rozszerzany o konkretne atrybuty w Twoich interfejsach (Patient, Appointment).

    Kiedy Wykorzystujesz TypeScript:
        W kodzie TypeScript możesz używać tych interfejsów do zapewnienia, że operacje na danych dokumentów są zgodne z ich strukturą. Pomaga to uniknąć błędów typów i zapewnia, że dane są używane w sposób zgodny z ich definicją.

W praktyce oznacza to, że:

    W Appwrite: Dokumenty są przechowywane w bazie danych zgodnie z Twoją definicją w konsoli Appwrite.
    W Twoim Kodzie: TypeScript używa tych interfejsów do zapewnienia, że dokumenty są używane w sposób zgodny z ich strukturą w kodzie aplikacji.

Ostatecznie, Models.Document w TypeScript jest bardziej abstrakcyjnym typem, który jest rozszerzany o konkretne właściwości dla Twojej aplikacji, podczas gdy Appwrite przechowuje dokumenty zgodnie z Twoimi definicjami kolekcji.
You said:
to czemu wykorzystuje Models.Document? nie mógłbym poprostu stworzyc zwykłego interfejsu Patient?
ChatGPT said:
ChatGPT

Oczywiście, możesz stworzyć zwykły interfejs Patient bezpośrednio, ale użycie Models.Document ma swoje zalety. Oto dlaczego warto rozważyć użycie Models.Document:
1. Zintegrowane Typowanie:

    Models.Document jest częścią SDK Appwrite i zapewnia podstawowe właściwości dokumentu, takie jak $id, $collectionId, $createdAt, $updatedAt, itp. Używając Models.Document, masz pewność, że Twoje interfejsy są zgodne z tym, co Appwrite zwraca i oczekuje.

2. Automatyczna Integracja:

    SDK Appwrite często wymaga operacji na dokumentach, które mają te podstawowe właściwości. Rozszerzając Models.Document, Twoje interfejsy są od razu kompatybilne z metodami i funkcjami SDK, które operują na dokumentach.

3. Współdzielenie Typów:

    Używanie Models.Document ułatwia współdzielenie typów i struktur między różnymi częściami aplikacji i SDK. To może pomóc w uniknięciu błędów wynikających z niezgodności między strukturą dokumentów w bazie danych a kodem aplikacji.

4. Standaryzacja:

    Jeśli masz więcej interfejsów dokumentów (np. Appointment, Invoice, itp.), możesz stosować tę samą podstawową strukturę (Models.Document) w każdym z nich. To zapewnia jednolitość i ułatwia utrzymanie kodu.

5. Współpraca z SDK:

    Korzystanie z typów z SDK może pomóc w lepszej współpracy z narzędziami i bibliotekami dostarczonymi przez Appwrite, co może uprościć pracę z dokumentami.

Przykład:

Jeśli chcesz stworzyć prosty interfejs Patient bez rozszerzania Models.Document, wyglądałoby to tak:

typescript

export interface Patient {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies?: string;
  currentMedication?: string;
  familyMedicalHistory?: string;
  pastMedicalHistory?: string;
  identificationType?: string;
  identificationNumber?: string;
  identificationDocument?: FormData;
  privacyConsent: boolean;
}

Różnica polega na tym, że nie masz w tym przypadku właściwości dokumentu takich jak id, createdAt, updatedAt, które są automatycznie zarządzane przez Appwrite. Jeśli Twoje aplikacje i SDK potrzebują tych właściwości, to rozszerzenie Models.Document może być bardziej praktyczne.

Interface User w pliku index.d.ts w katalogu types jest tworzony manualnie bez szablonu rtypu Models.Document{} bo users nie jest kolekcja w database appwrite wiec nie ma typowego modelu, raczej ma zwiazek z autoryzacja Auth i zbiorem users z Appwrite
*/
}
