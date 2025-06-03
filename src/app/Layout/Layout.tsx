import classNames from 'classnames';
import Header from '../../components/Header/Header';
import css from './styles.module.css';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    >
      <Header />
      <div className={classNames('content', css.page)}>{children}</div>
      <Footer />
    </div>
  );
}
