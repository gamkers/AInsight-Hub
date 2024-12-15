import React from 'react';
import { Modal } from '../ui/Modal';
import { PostContent } from './PostContent';
import { PostNavigation } from './PostNavigation';
import { PostHeader } from './PostHeader';
import { PostKeywords } from './PostKeywords';
import type { Post } from '../../types/post';

interface PostModalProps {
  post: Post;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({ 
  post, 
  isOpen, 
  onClose,
  onNext,
  onPrevious 
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative flex flex-col h-[90vh] md:h-[85vh]">
        <PostHeader post={post} onClose={onClose} />
        
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6">
          <PostContent post={post} />
        </div>

        <div className="sticky bottom-0 bg-black/90 border-t border-purple-500/20">
          <PostKeywords post={post} />
          <PostNavigation onPrevious={onPrevious} onNext={onNext} />
        </div>
      </div>
    </Modal>
  );
};