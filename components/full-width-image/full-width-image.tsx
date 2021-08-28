import Image from "next/image";

export const FullWidthImage = ({ imgSrc }: { imgSrc: string }) => {
  return (
      <div style={{
          border: "1px solid black"
      }}>
      <Image src={imgSrc}  layout='responsive' width={1080} height={400} />
      </div>
  );
};
