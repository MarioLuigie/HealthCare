import Image from "next/image"

type FormPageTemplateProps = {
  children: React.ReactNode
  image?: { path: string; alt: string }
  video?: { path: string }
  classes?: string
  isVideo?: boolean
}

export default function FormPageTemplate({
  children,
  image,
  video,
  classes,
  isVideo = false,
}: FormPageTemplateProps) {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto min-h-screen overflow-y-auto">
        <div className={`sub-container ${classes} min-h-screen`}>
          {children}
        </div>
      </section>
      <section className="max-w-[33%]">
        {isVideo
          ? video && (
              <div className="flex justify-center h-full">
                <video autoPlay loop muted className="side-video">
                  <source src={video.path} type="video/mp4" />
                </video>
              </div>
            )
          : image && (
              <Image
                src={image.path}
                height={1000}
                width={1000}
                alt={image.alt}
                className="side-img"
              />
            )}
      </section>
    </div>
  )
}
