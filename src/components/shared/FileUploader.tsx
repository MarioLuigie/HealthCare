'use client'

// modules
import Image from 'next/image'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
// lib
import { convertFileToUrl } from '@/lib/utils'
import { Icons } from '@/lib/constants'

interface FileUploaderProps {
	files: File[] | undefined
	onChange: (files: File[]) => void
}

export default function FileUploader({ files, onChange }: FileUploaderProps) {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		onChange(acceptedFiles)
	}, [onChange])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

	return (
		<div {...getRootProps()} className="file-upload">
			<input {...getInputProps()} />

			{files && files?.length > 0 ? (
				files
					.slice(0, 2)
					.map((file, i) => (
						<Image
							src={convertFileToUrl(file)}
							width={1000}
							height={1000}
							alt="uploaded image"
							className="max-h-[400px] overflow-hidden object-cover"
							key={i}
						/>
					))
			) : isDragActive ? (
				<Image
					src={Icons.UPLOAD_ANIME_ICON.path}
					width={100}
					height={100}
					alt={Icons.UPLOAD_ANIME_ICON.alt}
				/>
			) : (
				<>
					<Image
						src={Icons.UPLOAD_ICON.path}
						width={50}
						height={50}
						alt={Icons.UPLOAD_ICON.alt}
					/>
					<div className="file-upload_label">
						<p className="text-14-regular ">
							<span className="text-green-500">Click to upload </span>
							or drag and drop
						</p>
						<p className="text-12-regular">
							SVG, PNG, JPG or GIF (max. 800x400px)
						</p>
					</div>
				</>
			)}
		</div>
	)
}
