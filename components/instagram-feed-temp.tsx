'use client'

import Image from 'next/image'

const posts = [
  {
    image: '/post1.jpg',
    link: 'https://www.instagram.com/vethoff_/p/C7Zs1BDRjdR/',
  },
  {
    image: '/post2.jpg',
    link: 'https://www.instagram.com/vethoff_/p/C7m5QeivFof/',
  },
  {
    image: '/post3.jpg',
    link: 'https://www.instagram.com/vethoff_/p/C7NFyzxPbAK/',
  },
  {
    image: '/post4.jpg',
    link: 'https://www.instagram.com/vethoff_/p/DQxVm3zkatd/',
  },
  {
    image: '/post5.jpg',
    link: 'https://www.instagram.com/vethoff_/p/DQKwQLODdbn/',
  },
  {
    image: '/post6.jpg',
    link: 'https://www.instagram.com/vethoff_/p/DQFiNrmEf5D/',
  },
]

export default function InstagramFeedTemp() {
  return (
    <div className="w-full">
      <div className="instafeed-wrapper rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/20 shadow-xl p-4 md:p-6">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 text-center">
            Siga-nos no Instagram
          </h2>
          <a
            href="https://www.instagram.com/vethoff_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-300 text-sm md:text-base font-medium inline-flex items-center gap-2"
          >
            @vethoff_
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 3H21V9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14L21 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18C9.79 18 8 16.21 8 14C8 11.79 9.79 10 12 10C14.21 10 16 11.79 16 14C16 16.21 14.21 18 12 18Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

