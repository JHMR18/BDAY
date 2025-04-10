window.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
  
    openBtn.addEventListener('click', () => {
      const loader = document.getElementById('loader');
      loader.style.opacity = '0';
  
      setTimeout(() => {
        loader.remove();
        const videoContainer = document.getElementById('video-container');
        videoContainer.classList.remove('hidden');
  
        const video = document.getElementById('birthday-video');
        video.play();
      }, 500); // wait for fade
    });
  });
  