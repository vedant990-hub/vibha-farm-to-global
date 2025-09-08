import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="relative w-[200px] h-[60px] z-[1]">
      {/* Circles */}
      <div className="absolute w-[20px] h-[20px] rounded-full bg-white left-[15%] [transform-origin:50%] animate-[circle7124_.5s_alternate_infinite_ease]" />
      <div className="absolute w-[20px] h-[20px] rounded-full bg-white left-[45%] [transform-origin:50%] animate-[circle7124_.5s_alternate_infinite_ease]" style={{ animationDelay: '.2s' }} />
      <div className="absolute w-[20px] h-[20px] rounded-full bg-white right-[15%] [transform-origin:50%] animate-[circle7124_.5s_alternate_infinite_ease]" style={{ animationDelay: '.3s' }} />

      {/* Shadows */}
      <div className="absolute w-[20px] h-[4px] rounded-full bg-black/90 top-[62px] [transform-origin:50%] z-[-1] left-[15%] blur-[1px] animate-[shadow046_.5s_alternate_infinite_ease]" />
      <div className="absolute w-[20px] h-[4px] rounded-full bg-black/90 top-[62px] [transform-origin:50%] z-[-1] left-[45%] blur-[1px] animate-[shadow046_.5s_alternate_infinite_ease]" style={{ animationDelay: '.2s' }} />
      <div className="absolute w-[20px] h-[4px] rounded-full bg-black/90 top-[62px] [transform-origin:50%] z-[-1] right-[15%] blur-[1px] animate-[shadow046_.5s_alternate_infinite_ease]" style={{ animationDelay: '.3s' }} />

      <style>
        {`
        @keyframes circle7124 {
          0% {
            top: 60px;
            height: 5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
          }
          40% {
            height: 20px;
            border-radius: 50%;
            transform: scaleX(1);
          }
          100% {
            top: 0%;
          }
        }

        @keyframes shadow046 {
          0% {
            transform: scaleX(1.5);
          }
          40% {
            transform: scaleX(1);
            opacity: .7;
          }
          100% {
            transform: scaleX(.2);
            opacity: .4;
          }
        }
        `}
      </style>
    </div>
  );
}

export default Loader;


