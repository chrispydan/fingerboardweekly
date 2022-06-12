import React from 'react';
import parse from "html-react-parser";
import { domToReact } from 'html-react-parser';
import moment from 'moment';
import Link from 'next/link';
import { grpahCMSImageLoader } from '../util';
import Image from 'next/image';



const options = {
  replace: (domNode) => {
    if (domNode.name === "a") {
			const { href, class: className } = domNode.attribs

			return (
				<Link href={href} passHref>
					<a className="link">{domToReact(domNode.children)}</a>
				</Link>
			)
		}

    if (domNode.name === "h2") {

      return (
          <h2 className="text-xl font-semibold mb-4">{domToReact(domNode.children)}</h2>
  
      )
    }
    if (domNode.name === "h3") {

      return (
          <h3 className="text-md font-semibold mb-4">{domToReact(domNode.children)}</h3>
      )
    }
    if (domNode.name === "p") {

      return (
          <p className="mb-8">{domToReact(domNode.children)}</p>
  
      )
    }
    if (domNode.name === "li") {

      return (
          <li className="mb-4">{domToReact(domNode.children)}</li>

      )
    }
    
	},
  
}

const PostDetail = ({ post }) => (
    <>
      <div className="dark:bg-slate-900 bg-white shadow-md lg:p-8 pb-12 mb-8 ">
        <div className="relative overflow-hidden shadow-md pb-96 mb-6">
          <Image
          
            priority
            loader={grpahCMSImageLoader}
            src={post.coverImage.url}
            layout="fill"
            alt={post.title}
            className="absolute h-96 w-full object-cover" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <Image
                loader={grpahCMSImageLoader}
                alt={post.author.name}
                height={30}
                width={30}
                className="align-middle rounded-full"
                src={post.author.picture.url}
              />
              <p className="inline align-middle ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibolddark:text-gray-100">{post.title}</h1>
          {parse(post.content.html, options)}
        </div>
      </div>

    </>
  );

export default PostDetail;