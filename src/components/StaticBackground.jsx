const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

const StaticBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: '#000',
        backgroundImage: `url('/bg5.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        opacity: 0.9,
      }}
    />
  );
};

export default StaticBackground;
