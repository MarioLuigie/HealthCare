import { Header, Main, Footer } from "@/components/layout"

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: SingleSlugParams
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header params={params} />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
