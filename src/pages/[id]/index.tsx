import React from 'react';
import { useRouter } from 'next/router';
import ChatSection from '../../components/chatSection';
import Footer from '../../components/footer';
import NavBar from '../../components/navBar';
import { cardData } from '../../constants/blogData';
import BlogPageData from '../../constants/blogPageData';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  const card: any | undefined = cardData.find((card) => card.id.toString() === id);

  return (
    <div className="flex flex-col bg-orange-100">
      <NavBar subNavData={card?.product} />
      <BlogPageData card={card} />
      <ChatSection />
      <Footer />
    </div>
  );
};

export default BlogPage;
