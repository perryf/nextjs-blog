import Image from 'next/image'

export default function ProfilePic() {
	return (
		<Image
			src="/images/profile.png" // Route of the image file
			height={200} // Desired size with correct aspect ratio
			width={200} // Desired size with correct aspect ratio
			alt="Profile pic"
		/>
	)
}
