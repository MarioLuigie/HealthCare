import { Header, Aside, Main, Footer } from "@/components/layout"

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: SingleSlugParams
}) {
  return (
    <div className="flex flex-col justify-between h-screen border-x border-x-dark-500">
      <Header />
      <div className="flex overflow-hidden remove-scrollbar grow w-full">
        <Aside
          position="left"
          className="overflow-auto remove-scrollbar h-full min-w-[60px] max-w-[250px] w-[10%] sm:w-[15%] md:w-[23%] lg:w-[25%]"
        />
        <Main className="order-2 sm:order-1 overflow-auto remove-scrollbar grow h-full">
          {children}
        </Main>
      </div>
      <Footer />
    </div>
  )
}

// ALTERNATIVE
// import { Header, Aside, Main, Footer } from "@/components/layout"

// export default function Layout({
//   children,
//   params,
// }: {
//   children: React.ReactNode
//   params: SingleSlugParams
// }) {
//   return (
//     <div className="flex flex-col justify-between h-screen">
//       <Header />
//       <div className="flex overflow-hidden remove-scrollbar grow w-full">
//         <Aside
//           position="left"
//           className="overflow-auto remove-scrollbar h-full"
//         />
//         {/* <div className="flex flex-col sm:flex-row sm:grow h-full"> */}
//           <Main className="order-2 sm:order-1 overflow-auto remove-scrollbar h-full">
//             {children}
//           </Main>
//           {/* <Aside
//             position="right"
//             className="order-1 sm:order-2 overflow-auto remove-scrollbar min-h-[100px] sm:h-full"
//           /> */}
//         {/* </div> */}
//       </div>
//       <Footer />
//     </div>
//   )
// }

// EXAMPLES HISTORY

// import { Header, Aside, Main, Footer } from "@/components/layout"

// export default function Layout({
//   children,
//   params,
// }: {
//   children: React.ReactNode
//   params: SingleSlugParams
// }) {
//   return (
//     <div className="flex flex-col justify-between h-screen">
//       <Header />
//       <div className="flex flex-col grow overflow-auto bg-yellow-300">
//         <Aside position="left" />
//         <div className="flex flex-col sm:flex-row sm:grow">
//           <Main className="order-2 sm:order-1">{children}</Main>
//           <Aside position="right" className="order-1 min-h-[200px] sm:order-2 sm:min-h-0" />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// import { Header, Aside, Main, Footer } from "@/components/layout";

// export default function Layout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: SingleSlugParams;
// }) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex flex-col sm:flex-row grow">
//         <Aside className="order-1 sm:order-1" position="left" />

//         <Main className="order-2 sm:order-2 grow">{children}</Main>

//         <Aside className="order-3 sm:order-3" position="right" />
//       </div>
//       <Footer />
//     </div>
//   );
// }
