// Interfaces available globally throughout the application without the need for import and export
// User
declare interface CreateUserParams {
	name: string
	email: string
	phone: string
}
declare interface User extends CreateUserParams {
	$id: string
}

declare interface RegisterUserParams extends CreateUserParams {
	userId: string
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

// Appointment
declare type CreateAppointmentParams = {
	userId: string
	patient: string
	primaryPhysician: string
	reason: string
	schedule: Date
	status: Status
	note: string | undefined
}

declare type UpdateAppointmentParams = {
	appointmentId: string
	userId: string
	appointment: Appointment
	type: string
}

// Search
declare type SearchParamProps = {
	params: { [key: string]: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

declare type Gender = 'Male' | 'Female' | 'Other'
declare type Status = 'pending' | 'scheduled' | 'cancelled'




{/*
Tak, te dwa zapisy różnią się i mają różne zastosowania. Oto wyjaśnienie:
1. declare interface

typescript

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

    Słowo kluczowe declare oznacza, że deklarujesz coś, co jest już zdefiniowane gdzieś indziej (lub zakładasz, że istnieje). Używa się tego zazwyczaj w plikach deklaracji typu .d.ts.
    Deklaracja globalna: Gdy używasz declare, zakładasz, że ta definicja istnieje globalnie w całym projekcie. Zwykle stosuje się to w plikach .d.ts, które nie są kompilowane do JavaScriptu, ale dostarczają TypeScriptowi informacji o typach. Są one wczytywane globalnie i mogą być używane w całym projekcie bez importowania.
    Pliki .d.ts (pliki deklaracji typu) zawierają wyłącznie definicje typów (interfaces, types, enums, itp.) bez rzeczywistego kodu logiki. Są używane przez TypeScript jako pomocnicze informacje o typach.

2. export interface

typescript

export interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

    Słowo kluczowe export oznacza, że interfejs jest eksportowany i może być zaimportowany do innych modułów. Jest to klasyczny sposób definiowania interfejsu w plikach .ts.
    Import-Export: W przypadku użycia export, musisz jawnie importować ten interfejs, aby użyć go w innym pliku. To jest zgodne z systemem modułów w TypeScriptie.
    Pliki .ts zawierają zarówno kod logiki (np. funkcje, klasy), jak i definicje typów. Różnią się od plików .d.ts tym, że są kompilowane do JavaScriptu.

Dlaczego declare musi być w pliku .d.ts?

    Globalny zakres: Plik .d.ts definiuje typy, które są widoczne globalnie w projekcie bez konieczności ich jawnego importowania. Jeśli umieścisz interfejs w pliku .d.ts z użyciem declare, staje się on automatycznie dostępny w całym projekcie.
    Bez export: W pliku .d.ts zazwyczaj nie używasz export, ponieważ takie pliki są wczytywane automatycznie przez TypeScript. Deklaracje w tych plikach są globalne z natury.

Natomiast w plikach .ts interfejsy muszą być eksportowane, aby mogły być używane w innych częściach projektu, ponieważ TypeScript nie traktuje ich jako globalnych definicji typów.
Podsumowanie:

    declare interface w pliku .d.ts deklaruje globalny interfejs, który nie wymaga importowania i jest dostępny we wszystkich modułach.
    export interface w pliku .ts wymaga jawnego importu, aby go użyć w innych miejscach, ponieważ jest częścią systemu modułów TypeScriptu.

Dlatego pierwszy zapis (z declare) zwykle trafia do plików .d.ts, a drugi zapis (z export) do plików .ts, ponieważ obsługują różne mechanizmy widoczności w projekcie.
You said:
kiedy stosowac typy z declare a kiedy typy bez declare ?
ChatGPT said:
ChatGPT

Stosowanie typów z declare lub bez declare w TypeScriptie zależy od kontekstu i tego, jak chcesz zarządzać widocznością i użyciem tych typów w swoim projekcie. Oto kilka wskazówek, które pomogą Ci zdecydować, kiedy używać typów z declare, a kiedy bez.
Kiedy używać declare (np. w plikach .d.ts):

    Globalne typy:
        Jeśli potrzebujesz zdefiniować typy, które będą dostępne globalnie w całym projekcie, bez konieczności ich importowania. Takie podejście jest przydatne, gdy chcesz, aby typy były dostępne we wszystkich plikach bez jawnego ich importu.
        Typowe w przypadkach, gdy masz interfejsy lub typy wspólne dla całego projektu, na przykład w konfiguracji TypeScriptu lub przy rozbudowie istniejących bibliotek, które nie dostarczają wystarczających typów.

    Rozszerzanie istniejących typów:
        Jeśli rozszerzasz globalne obiekty JavaScriptu lub istniejące typy z bibliotek (np. rozszerzanie obiektu Window, dodawanie nowych funkcji do obiektów z Node.js, Express itd.), używasz declare w pliku .d.ts. To pozwala dodawać właściwości lub metody do istniejących globalnych definicji.

    typescript

    declare global {
      interface Window {
        myCustomProperty: string;
      }
    }

    Deklaracje typów zewnętrznych bibliotek:
        Pliki .d.ts są często używane do definiowania typów dla bibliotek zewnętrznych, które nie mają wbudowanych typów w swoich plikach. W takim przypadku tworzysz własny plik .d.ts i używasz declare, aby poinformować TypeScript o istnieniu tych typów.

    Definicje w bibliotekach typu DefinitelyTyped:
        Gdy tworzysz pliki typów dla bibliotek open-source, np. przy rozwijaniu definicji dla DefinitelyTyped, używasz plików .d.ts, w których stosujesz declare, aby opisywać typy, które są eksportowane globalnie przez bibliotekę.

Kiedy nie używać declare (w plikach .ts z export):

    Moduły z typami lokalnymi:
        Jeśli chcesz definiować typy, które będą dostępne tylko w obrębie konkretnego modułu lub pliku i nie muszą być globalne. W takim przypadku używasz zwykłego export i importujesz je w innych plikach, gdy są potrzebne.

    typescript

    export interface User {
      name: string;
      email: string;
    }

    // W innym pliku
    import { User } from './user';

    Lepsza kontrola nad importami i widocznością:
        Kiedy chcesz jawnie kontrolować, które typy są dostępne w danym module i które mogą być importowane do innych plików. Używanie export i import pozwala na większą modularność kodu, co jest często pożądane w dużych projektach, gdzie chcesz unikać nadmiaru globalnych definicji.

    Mniejsza złożoność:
        W małych projektach lub modułach, gdzie typy są używane w określonych miejscach, export i import pozwalają na łatwiejsze śledzenie zależności między modułami, zamiast mieć wszystkie typy dostępne globalnie.

Przykłady zastosowań:

    Zastosowanie declare w pliku .d.ts:
        W dużych projektach lub przy pracy z zewnętrznymi bibliotekami, które nie dostarczają swoich typów, możesz zdefiniować takie typy globalnie:

    typescript

// file: globals.d.ts
declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

// W dowolnym pliku możesz użyć tego interfejsu bez importowania
const newUser: CreateUserParams = {
  name: "John Doe",
  email: "john@example.com",
  phone: "123456789",
};

Zastosowanie typów bez declare (z export) w pliku .ts:

    Kiedy chcesz mieć typy modularne, które są importowane tylko wtedy, gdy są potrzebne:

typescript

    // file: user.ts
    export interface CreateUserParams {
      name: string;
      email: string;
      phone: string;
    }

    // file: userService.ts
    import { CreateUserParams } from './user';

    const newUser: CreateUserParams = {
      name: "John Doe",
      email: "john@example.com",
      phone: "123456789",
    };

Podsumowanie:

    Używaj declare w plikach .d.ts, kiedy chcesz, aby typy były dostępne globalnie w całym projekcie, bez konieczności ich importowania (np. rozszerzenie bibliotek, globalne typy dla całego projektu).
    Używaj zwykłego export bez declare w plikach .ts, kiedy chcesz kontrolować widoczność typów i importować je w innych modułach, tworząc bardziej modularny i uporządkowany kod.

Rozróżnienie to pomaga w zarządzaniu typami na dużą skalę i w zapewnieniu lepszej struktury w projektach TypeScript.

*/}

{/*
czyli po zapisaniu usera do Appwrite do Users Appwrite automatycznie nadaje userowi id i zwraca usera juz z tym id tak? Dlatego potrzebuje interface CreateUserParams do wyslania usera do Appwrite i interfejsu User ktory rozszerza CreateUserParams do okreslenia nowego usera zwroconego przez appwrite tak ?
ChatGPT said:
ChatGPT

Tak, dokładnie! Twoje zrozumienie jest poprawne. Oto szczegółowe wyjaśnienie:
Proces tworzenia użytkownika w Appwrite

    Tworzenie użytkownika:
        Gdy tworzysz nowego użytkownika w Appwrite, wysyłasz dane użytkownika, takie jak name, email i phone, przy użyciu odpowiedniego endpointu API.
        Te dane są przesyłane do Appwrite przy użyciu interfejsu CreateUserParams, który definiuje wymagane pola do stworzenia użytkownika.

    Automatyczne nadawanie identyfikatora:
        Appwrite automatycznie generuje unikalny identyfikator dla każdego nowego użytkownika. Ten identyfikator jest zazwyczaj przypisywany do pola _id w bazie danych, ale w Twoim kodzie może być oznaczany jako $id (lub inne w zależności od konwencji nazewnictwa).
        Po pomyślnym utworzeniu użytkownika, Appwrite zwraca pełny obiekt użytkownika, który zawiera wszystkie przesłane dane oraz dodatkowe informacje, takie jak właśnie automatycznie wygenerowany identyfikator.

Interfejsy w TypeScript

    CreateUserParams:
        Definiuje strukturę obiektu, który wysyłasz do Appwrite w celu utworzenia użytkownika. Zawiera pola, które są wymagane do stworzenia nowego użytkownika, ale nie obejmuje identyfikatora, ponieważ ten jest generowany przez Appwrite.

    User:
        Rozszerza CreateUserParams, dodając dodatkowe pole $id. To pole $id reprezentuje unikalny identyfikator przypisany do użytkownika przez Appwrite.
        Używając User, możesz opisać strukturę obiektu, który otrzymasz od Appwrite po pomyślnym stworzeniu użytkownika, zawierającą zarówno przesłane dane, jak i automatycznie wygenerowany identyfikator.

Przykład użycia

    Tworzenie użytkownika:

    typescript

const createUserParams: CreateUserParams = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '1234567890'
};

// Wywołanie API Appwrite w celu utworzenia użytkownika
const response = await appwriteClient.createUser(createUserParams);

Otrzymywanie użytkownika:

typescript

    // Odpowiedź od Appwrite zawiera również $id
    const user: User = response.data;
    console.log(user.$id); // Wyświetla automatycznie wygenerowany identyfikator

Podsumowanie

Tak, Twoje interfejsy są zgodne z typowym użyciem w takich przypadkach:

    CreateUserParams służy do opisania danych wejściowych do API podczas tworzenia użytkownika.
    User opisuje pełny obiekt użytkownika, który zawiera zarówno dane wejściowe, jak i dodatkowe informacje takie jak automatycznie nadany identyfikator ($id).

Twoje podejście zapewnia jasne oddzielenie struktury danych wejściowych od struktury danych wyjściowych, co jest dobrą praktyką w pracy z API i TypeScript.
*/}
