// Typewriter effect
const typewriter = new Typewriter('#typewriter', {
  loop: true,
  delay: 75,
  cursor: '|',
});

typewriter
  .typeString('wtf.zxc')
  .pauseFor(1000)
  .deleteAll()
  .typeString('OWNED BY ISH')
  .pauseFor(1000)
  .deleteAll()
  .start();

// Overlay click-to-enter logic
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      overlay.classList.add('hidden');
    });
  }
});