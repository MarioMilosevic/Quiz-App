
const Modal = () => {

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-gray-900 bg-opacity-80  z-10 duration-1000 transition-all">
      <div className="mx-auto flex flex-col justify-center items-center fixed w-[400px] top-[50%] px-2 py-6 text-2xl  rounded-lg right-[50%] bg-gray-950 bg-opacity-90 translate-x-[50%] translate-y-[-50%] z-20 text-center">
        <p className=" bg-gray-200  py-4 px-6 mb-8 rounded-lg text-center">
          Game Over !
        </p>
        <p className=" bg-gray-100 py-4 px-6  rounded-lg text-center">
          Your Score: 10
        </p>
        <button
          className="bg-gray-700 text-gray-50 p-4 mt-8 text-2xl rounded-lg hover:bg-gray-600"
        //   onClick={reset}
        >
          Start New Game ?
        </button>
      </div>
    </div>
  );
};

export default Modal;