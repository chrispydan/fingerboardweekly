import Image from 'next/image'

export const grpahCMSImageLoader = ({ src, width, quality  }) => {
    const relativeSrc = (src) => src.split('/').pop();
    
    return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
        src
      )}`
  }