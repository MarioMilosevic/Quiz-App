interface ModalType {
    score:number,
    amount:number,
    resetGame:() => void
}

const Modal = ({ score, amount, resetGame } : ModalType) => {
    // const percentage = (score / amount) * 100
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-zinc-900 bg-opacity-80 z-10 duration-1000 transition-all">
      <div className="mx-auto flex flex-col justify-center items-center fixed top-[50%] px-3 py-6  rounded-xl right-[50%] bg-zinc-50  translate-x-[50%] translate-y-[-50%] z-20 text-center">
        <p className="py-4 px-6 mb-8 border rounded-lg shadow-lg text-xl text-center">
          Game Over !
        </p>
        <p className="px-6 py-4 border shadow-lg rounded-lg text-xl text-center">
          You answered {score}/{amount} or {(score / amount) * 100}% questions correctly
        </p>
        <button
          className="bg-amber-600 text-zinc-50 p-4 mt-8 text-xl rounded-lg hover:bg-amber-700"
            onClick={resetGame}
        >
          Start New Game ?
        </button>
      </div>
    </div>
  );
};

export default Modal;
