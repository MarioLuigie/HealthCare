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
      <div id="100" className="remove-scrollbar container my-auto h-screen overflow-y-auto">
        <div className={`sub-container ${classes} min-h-screen`}>
          {children}
        </div>
      </div>
      <div id="200" className="w-[50%] hidden md:block">
        {isVideo
          ? video && (
              <div className="flex justify-center h-full w-full">
                <video autoPlay loop muted className="side-video w-full">
                  <source src={video.path} type="video/mp4"/>
                </video>
              </div>
            )
          : image && (
              <Image
                src={image.path}
                height={1000}
                width={1000}
                alt={image.alt}
                className="side-img w-full"
              />
            )}
      </div>
    </div>
  )
}
