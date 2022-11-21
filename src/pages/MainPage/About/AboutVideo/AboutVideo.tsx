import './AboutVideo.css';

import { Modal } from '@consta/uikit/Modal';
import React, { useState } from 'react';

import { cn } from '##/utils/bem';

const cnAboutVideo = cn('AboutVideo');

const videoLink = 'https://www.youtube.com/watch?v=ebZeLi3cfI4';

export const AboutVideo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    window.open(videoLink);
  };

  return (
    <>
      <button onClick={handleClick} className={cnAboutVideo()} type="button">
        <div className={cnAboutVideo('Play')}>
          <div className={cnAboutVideo('Triangle')} />
        </div>
        <div className={cnAboutVideo('Content')}>Cмотреть видео</div>
      </button>
      <Modal
        rootClassName={cnAboutVideo('ModalRoot')}
        className={cnAboutVideo('Modal')}
        isOpen={open}
        onOverlayClick={() => setOpen(false)}
      >
        <iframe
          className={cnAboutVideo('YouTube')}
          title={cnAboutVideo('YouTube')}
          src="https://www.youtube.com/embed/ebZeLi3cfI4?autoplay=1"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Modal>
    </>
  );
};
