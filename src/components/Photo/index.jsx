import Image from 'next/image'

import { PhotoComponent } from "./styles"

export const Photo = () => {
    return (
        <PhotoComponent>
            <Image 
              className="img"
              src="/photo.jpg" 
              alt="Alex Nicolas foto"
              width={100}
              height={100}
            />
        </PhotoComponent>
    )
}