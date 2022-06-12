import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-slate-900 dark:bg-slate-400  bg-opacity-95">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        loader={grpahCMSImageLoader}
        alt={author.name}
        height={100}
        width={100}
        className="align-middle rounded-full"
        src={author.picture.url}
      />
    </div>
    <h3 className="text-white dark:text-black mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white dark:text-black text-ls">{author.biography}</p>
  </div>
);

export default Author;