import { Models } from 'node-appwrite'
import { Gender, Status } from '@/lib/types/enums'

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
	allergies?: string | undefined
	currentMedication?: string | undefined
	familyMedicalHistory?: string | undefined
	pastMedicalHistory?: string | undefined
	identificationType?: string | undefined
	identificationNumber?: string | undefined
	identificationDocument?: FormData | undefined // ?? W database appwrite zamiast it mamy identificationDocumentId i identificationDocumentUrl ??
    // !! Change from '...Document' to '...Documents' !!
	privacyConsent: boolean // ?? Brak pozostałych 2 consents tu i w db appwrite ??
}

export interface Appointment extends Models.Document {
	userId: string
	patient: Patient
	schedule: Date
	status: Status
	primaryPhysician: string
	reason: string
	note: string
	cancellationReason: string | null
}

export interface IdentificationDocument extends Models.Document {
    url: string | null
    storageId: string | null
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

{/* 
czyli interface Patient zbudowany w aplikacji na Models.Document{} ma byc dokładnie taki sam, posiadac takie same pola jak schemat zbudowany za pomoca atrybutów w platformie Appwrite w odpowiedniej kolekcji tak?
ChatGPT said:
ChatGPT

Tak, dokładnie. Interfejs Patient w Twojej aplikacji powinien odzwierciedlać strukturę dokumentu w kolekcji Appwrite, z uwzględnieniem tych samych pól i typów danych, które są zdefiniowane w schemacie kolekcji Appwrite. Oto kilka kluczowych punktów, które warto mieć na uwadze:
1. Zgodność z Schematem:

    Interfejs Patient w kodzie TypeScript powinien mieć te same pola, które zostały zdefiniowane w schemacie kolekcji w Appwrite. Dzięki temu możesz mieć pewność, że dane, które są przesyłane do i z bazy danych, są zgodne z oczekiwaną strukturą.

2. Typy Danych:

    Upewnij się, że typy danych w interfejsie TypeScript odpowiadają typom danych zdefiniowanym w Appwrite. Na przykład, jeśli w Appwrite pole birthDate jest typu Date, to w TypeScript również powinno być typu Date.

3. Właściwości Dokumentu:

    Jeśli używasz Models.Document, interfejs Patient rozszerza te podstawowe właściwości dokumentu, takie jak $id, $collectionId, $createdAt, $updatedAt. Te właściwości są zarządzane przez Appwrite i mogą być użyteczne do śledzenia stanu dokumentu.

4. Opcjonalne Pola:

    W interfejsie TypeScript możesz oznaczyć niektóre pola jako opcjonalne (?), jeśli są one opcjonalne w Twoim schemacie w Appwrite. Na przykład, jeśli pole allergies w Appwrite jest opcjonalne, w interfejsie TypeScript powinno być oznaczone jako allergies?: string.

Przykład:

Jeśli Twoja kolekcja Patient w Appwrite ma następujące pola:

    userId (string)
    name (string)
    email (string)
    phone (string)
    birthDate (Date)
    gender (string)
    address (string)
    occupation (string)
    emergencyContactName (string)
    emergencyContactNumber (string)
    primaryPhysician (string)
    insuranceProvider (string)
    insurancePolicyNumber (string)
    allergies (string, opcjonalne)
    currentMedication (string, opcjonalne)
    familyMedicalHistory (string, opcjonalne)
    pastMedicalHistory (string, opcjonalne)
    identificationType (string, opcjonalne)
    identificationNumber (string, opcjonalne)
    identificationDocument (FormData, opcjonalne)
    privacyConsent (boolean)

Twój interfejs TypeScript powinien wyglądać mniej więcej tak:

typescript

import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: string;
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

W ten sposób zapewniasz, że Twoja aplikacja będzie poprawnie współpracować z danymi przechowywanymi w Appwrite i że wszelkie operacje na tych danych będą zgodne z ich strukturą.

*/}

{/* 

czemu ktos mógł przygotowac schemat w appwrite za pomoca atrybutów okreslajac pewne klucze jako opcjonalne/niewymagane a w aplikacji tworzy interfejs na podstawie Models.Document i wszydtkie pola sa wymagane bo nie stosuje ? jak to rozumiec?
ChatGPT said:
ChatGPT

To jest dobry punkt i może rzeczywiście prowadzić do nieporozumień. Oto, jak można zrozumieć tę sytuację i jak można ją rozwiązać:
Zrozumienie Różnic

    Schemat w Appwrite:
        W Appwrite możesz ustawić atrybuty dokumentów jako opcjonalne lub wymagane w konsoli administracyjnej. Jeśli pole jest oznaczone jako opcjonalne, oznacza to, że w dokumentach przechowywanych w bazie danych to pole nie musi być zawsze obecne.

    Interfejs TypeScript:
        W TypeScript, używając Models.Document, możesz rozszerzać podstawowy typ dokumentu o dodatkowe właściwości. Jednak Models.Document nie uwzględnia specyficznych ustawień opcjonalności pól, które są zdefiniowane w Appwrite.

Dlaczego Tak Jest?

    Ujednolicenie Dokumentów: Models.Document w SDK Appwrite to ogólna reprezentacja dokumentu, która zawiera podstawowe właściwości takie jak $id, $createdAt, itd. Nie zawiera specyficznych ustawień opcjonalności dla dodatkowych pól. Dlatego, jeśli chcesz odwzorować te ustawienia, musisz ręcznie dostosować interfejs.

    Dostosowanie Interfejsu: Kiedy tworzysz interfejs TypeScript, musisz ręcznie określić, które pola są opcjonalne (?) i które są wymagane (string | undefined). Interfejsy TypeScript są tworzone, aby odwzorować schemat danych w kodzie, ale nie mają automatycznego dostosowywania się do ustawień w Appwrite.

Rozwiązanie

Aby zachować zgodność między schematem w Appwrite a interfejsem TypeScript w Twojej aplikacji, postępuj zgodnie z poniższymi krokami:

    Reprezentacja Opcjonalnych Pól:
        Jeśli w Appwrite określono, że pewne pola są opcjonalne, upewnij się, że używasz ? w TypeScript dla tych pól.

    typescript

    export interface Patient extends Models.Document {
      userId: string;
      name: string;
      email: string;
      phone: string;
      birthDate: Date;
      gender: string;
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

    Synchronizacja z Schematem:
        Regularnie porównuj swoje interfejsy TypeScript z definicjami schematów w Appwrite, aby upewnić się, że są one zgodne. Jeśli zmienia się schemat w Appwrite, zaktualizuj interfejsy TypeScript, aby odzwierciedlały te zmiany.

    Dokumentacja:
        W dokumentacji lub komentarzach w kodzie zaznacz, które pola są opcjonalne w schemacie Appwrite, aby inni deweloperzy mogli łatwo zrozumieć, jakie są oczekiwania dotyczące danych.

Przykład Zaktualizowanego Interfejsu

Jeśli w Appwrite masz pole identificationNumber jako opcjonalne, upewnij się, że Twój interfejs w TypeScript odzwierciedla tę opcjonalność:

typescript

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: string;
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

To zapewni, że Twoja aplikacja i baza danych będą spójne pod względem struktury danych.*/}
