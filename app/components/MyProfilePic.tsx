import Image from 'next/image';
import React from 'react';

export const MyProfilePic = () => {
	return (
		<section className="w-full mx-auto">
			<Image
				className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
				src={'/images/profile-pic.jpeg'}
				width={200}
				height={200}
				alt="Altiansyah F."
				priority={true}
			/>
		</section>
	);
};
