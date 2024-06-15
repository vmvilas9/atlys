import { CreatePost, Header, Post } from './components';
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useEffect, useState } from 'react';
import { Box } from '../../lib/components';
import { PostProps } from './types';
import { AuthModal } from './components/authModal';
import { mockData } from './mockData';

export const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setPosts(mockData as PostProps[]);
  }, []);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onSubmitClick = () => {
    setIsModalOpen(false);
  };

  const onCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <InfiniteScroll
        style={{
          width: '50vw',
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
        next={() => {}}
        hasMore={false}
        loader={<div />}
        dataLength={posts.length}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Header />
          <CreatePost onClick={onClick} />
          {posts.map((post, index) => (
            <Post key={index} post={post} onClick={onClick} />
          ))}
        </Box>
      </InfiniteScroll>
      <AuthModal
        isModalOpen={isModalOpen}
        onSubmitClick={onSubmitClick}
        onCloseClick={onCloseClick}
      />
    </Box>
  );
};
