const MovieTrailer = ({ trailerKey, onClose }) => {
  if (!trailerKey) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none">
      
      {/* backdrop blur instead of black screen */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 pointer-events-auto" onClick={onClose} />

      <div className="relative w-[90%] max-w-6xl aspect-video z-10 pointer-events-auto">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-xl"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full rounded-lg shadow-2xl"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default MovieTrailer;
