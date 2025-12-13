const VedioTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-vedio pt-120 left-8 w-[40%]  z-20 px-4 bg-radient-to-r from-black">
      <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-2xl mb-4 text-gray-200">{title}</h1>
      <h1 className="text-base md:text-lg drop-shadow-md mb-6 line-clamp-4 text-gray-200">{overview}</h1>
      <div className="flex gap-4">
        <button className="bg-black text-white px-6 py-2 text-lg rounded-md font-semibold hover:bg-opacity-80 transition">
          Play
        </button>
        <button className="bg-black text-white px-6 py-2 text-lg rounded-md font-semibold hover:bg-opacity-80 transition">More Info</button>
      </div>
    </div>
  );
};

export default VedioTitle;
