const NewsLetters = () => {
  return (
    <div className="relative mt-16 w-full h-auto mb-10 flex flex-col lg:flex-row items-center justify-center bg-white p-6 lg:p-12">
      {/* SVG Decorations */}
      <div className="absolute top-0 left-0 w-28 h-full flex items-center justify-center -z-10">
        <svg
          className="bg"
          width="284"
          height="453"
          viewBox="0 0 284 453"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="main-color iconColor"
            d="M100.795 7.49467C105.015 -1.99852 118.025 -2.47329 123.123 6.07068L123.86 7.49467L136.88 36.7886C148.263 62.3995 167.185 83.8837 191.069 98.4068L195.095 100.762L218.221 113.77C226.323 118.328 226.773 129.596 219.571 134.898L218.221 135.769L195.095 148.778C170.668 162.518 151.059 183.378 138.846 208.521L136.88 212.751L123.86 242.045C119.641 251.538 106.63 252.013 101.531 243.469L100.795 242.045L87.7754 212.751C76.3928 187.141 57.4695 165.656 33.5855 151.133L29.5593 148.778L6.43298 135.769C-1.66775 131.213 -2.1179 119.945 5.08284 114.641L6.43298 113.77L29.5593 100.762C53.9866 87.0215 73.5964 66.162 85.8089 41.0183L87.7754 36.7886L100.795 7.49467Z"
            fill="currentColor"
          ></path>
          <path
            className="secondary-color iconColor"
            d="M159.795 210.495C164.015 201.001 177.025 200.527 182.123 209.071L182.86 210.495L195.88 239.789C207.263 265.399 226.185 286.884 250.069 301.407L254.095 303.762L277.221 316.77C285.323 321.328 285.773 332.596 278.571 337.898L277.221 338.769L254.095 351.778C229.668 365.518 210.059 386.378 197.846 411.521L195.88 415.751L182.86 445.045C178.641 454.538 165.63 455.013 160.531 446.469L159.795 445.045L146.775 415.751C135.393 390.141 116.47 368.656 92.5855 354.133L88.5593 351.778L65.433 338.769C57.3322 334.213 56.8821 322.945 64.0828 317.641L65.433 316.77L88.5593 303.762C112.987 290.022 132.596 269.162 144.809 244.018L146.775 239.789L159.795 210.495Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-28 h-full flex items-center justify-center -z-10">
        <svg
          className="bg2"
          width="284"
          height="453"
          viewBox="0 0 284 453"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="main-color iconColor"
            d="M100.795 445.045C105.015 454.538 118.025 455.013 123.123 446.469L123.86 445.045L136.88 415.751C148.263 390.14 167.185 368.656 191.069 354.133L195.095 351.777L218.221 338.77C226.323 334.212 226.773 322.944 219.571 317.642L218.221 316.77L195.095 303.762C170.668 290.022 151.059 269.162 138.846 244.018L136.88 239.788L123.86 210.494C119.641 201.002 106.63 200.527 101.531 209.071L100.795 210.494L87.7754 239.788C76.3928 265.399 57.4695 286.884 33.5855 301.406L29.5593 303.762L6.43298 316.77C-1.66775 321.327 -2.1179 332.595 5.08284 337.898L6.43298 338.77L29.5593 351.777C53.9866 365.518 73.5964 386.378 85.8089 411.521L87.7754 415.751L100.795 445.045Z"
            fill="currentColor"
          ></path>
          <path
            className="secondary-color iconColor"
            d="M159.795 242.045C164.015 251.538 177.025 252.013 182.123 243.469L182.86 242.045L195.88 212.751C207.263 187.14 226.185 165.656 250.069 151.133L254.095 148.777L277.221 135.77C285.323 131.212 285.773 119.944 278.571 114.642L277.221 113.77L254.095 100.762C229.668 87.0217 210.059 66.1616 197.846 41.0181L195.88 36.7884L182.86 7.49449C178.641 -1.99834 165.63 -2.473 160.531 6.07056L159.795 7.49449L146.775 36.7884C135.393 62.399 116.47 83.8839 92.5855 98.4062L88.5593 100.762L65.433 113.77C57.3322 118.327 56.8821 129.595 64.0828 134.898L65.433 135.77L88.5593 148.777C112.987 162.518 132.596 183.378 144.809 208.521L146.775 212.751L159.795 242.045Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-4 relative z-10">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
          Join Our Community
        </h1>
        <p className="text-lg sm:text-xl">
          Unlock full access to <span className="font-bold">Zento</span> and
          explore our extensive library of exclusive content.
        </p>
        <p className="text-lg sm:text-xl">
          Subscribe to our <span className="font-bold">newsletter</span> and
          cancel anytime.
        </p>
        <button className="mt-4 px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default NewsLetters;
