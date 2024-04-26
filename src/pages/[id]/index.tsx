import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import ChatSection from '../../components/chatSection';
import Footer from '../../components/footer';
import NavBar from '../../components/navBar';
import BlogPageData from '../../components/blogPageData';
import { useMergedData } from '@/utils/utils';
import Head from 'next/head';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch merged data
  const mergedData = useMergedData();

  // Function to get the object by ID
  function getObjectById(id:number) {
    return mergedData.find((item:any) => item.id == id);
  }


  // Find the object by ID
  const foundObject = getObjectById(Number(id));


  return (
    <>
    <Head>
        <title>{`Pure Beauty ${foundObject?.title.rendered}`}</title>
        <meta name="description" content="This page contains detailed information about a particualr blog " />
        <meta name="keywords" content="next.js, react, Pure beauty, skin care,pure beauty skin care" />
        <meta name="author" content="Lijoy Oommen"/>
        <link rel="icon" href="/Vector.svg" type="image/svg+xml" />
      </Head>
    <div className="flex flex-col bg-orange-100">
      <NavBar subNavData={foundObject?.title.rendered} />
      <BlogPageData card={foundObject} />
      <ChatSection />
      <Footer />
    </div>
    </>
  );
};

export default BlogPage;
