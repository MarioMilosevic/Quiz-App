const Answer = ({ answer }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: answer }}
      className="text-center py-2 text-xl w-[60%] mx-auto bg-zinc-700 text-zinc-50 cursor-pointer hover:bg-zinc-800"
    ></p>
  );
};

export default Answer;
