import Image from "next/image";

const EndlessText = ({ text, sign }: { text: string; sign: string }) => {
  var arr = [];
  var length = 100;

  for (var i = 0; i < length; i++) {
    arr.push(i);
  }
  console.log(sign);
  

  return (
    <div className={"scroll-holder"}>
      <div className={"scroll"}>
        {arr.map((item) => {
          return (
            <div className={"scroll-item"} key={item}>
                <Image src={sign} width={50} height={50} />
                <p className="scroll-text">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EndlessText;
