import { useEffect } from 'react';

export function FloatingElements() {
  useEffect(() => {
    // simple particle-like subtle motion can be enhanced later
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute right-4 top-6 h-24 w-24 opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="24" fill="#C8A95B" />
      </svg>
      <svg className="absolute left-6 bottom-8 h-16 w-16 opacity-20" viewBox="0 0 100 100">
        <path d="M50 10 L61 39 L93 39 L67 59 L77 90 L50 72 L23 90 L33 59 L7 39 L39 39 Z" fill="#C8A95B" />
      </svg>
    </div>
  );
}

export default FloatingElements;
