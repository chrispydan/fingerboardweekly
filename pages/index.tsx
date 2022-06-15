import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, TrickGenerator } from '../components';
import { getPosts } from '../services';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'

export default function Home({ posts }: {posts: any[]}) {
  return (
     
    <div className="container mx-auto px-10 mb-8">
      <Head>
      <title>Fingerboard Weekly</title>
      <meta name="description" content="Your source for fingerboard news, trick tips and more!"/>
      <meta name="og:title" content="Fingerboard Weekly" />
      <meta name="keywords" content="Fingerboarding, fingerboards, tech deck, tech decking"></meta>
    </Head>
      <FeaturedPosts />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <TrickGenerator />
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
            
          </div>

        </div>
      </div>
    </div>
  ); 
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}