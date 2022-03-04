import Image from 'next/image';

export const Icon = ({ href, src, alt }) => {
  return (
      <li>
        <a href={href}>
          <Image 
            src={src}
            alt={alt}
            width={25}
            height={25}
          />
        </a>
      </li>
  )
}