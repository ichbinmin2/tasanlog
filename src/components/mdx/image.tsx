type ImageType = "default" | "thumbnail";

interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className='mx-auto mb-0 mt-8 rounded-md max-w-[700px] max-h-[400px] w-full object-cover shadow-lg'
      />
      {alt !== "" && (
        <span className='mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400'>
          {alt}
        </span>
      )}
    </>
  );
};
