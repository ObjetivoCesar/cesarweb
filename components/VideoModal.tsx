'use client';

import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Cerrar reproductor de video"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Contenedor del video */}
        <div className="relative w-full" style={{ height: '80vh' }}>
          <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', height: '100%' }}>
            <iframe
              src={`${videoUrl}?autoplay=1&loop=1&muted=0&preload=1&responsive=1`}
              loading="lazy"
              style={{ 
                border: 'none', 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%' 
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video explicativo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
