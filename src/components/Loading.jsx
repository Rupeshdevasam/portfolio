import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 14,
      }}>
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 12,
          color: '#AFB0B6',
          fontWeight: 500,
          letterSpacing: '0.04em',
        }}>
        {progress > 0 ? `${Math.round(progress)}%` : 'Loading…'}
      </p>
    </Html>
  );
};

export default CanvasLoader;
