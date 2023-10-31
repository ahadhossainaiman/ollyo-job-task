import img_1 from "../../assets/images/image-1.webp";
import img_2 from "../../assets/images/image-2.webp";
import img_3 from "../../assets/images/image-3.webp";
import img_4 from "../../assets/images/image-4.webp";
import img_5 from "../../assets/images/image-5.webp";
import img_6 from "../../assets/images/image-6.webp";
import img_7 from "../../assets/images/image-7.webp";
import img_8 from "../../assets/images/image-8.webp";
import img_9 from "../../assets/images/image-9.webp";
import img_10 from "../../assets/images/image-10.jpeg";
import img_11 from "../../assets/images/image-11.jpeg";
import { useRef } from "react";

const Home = () => {
  const img_gallery = [
    {
      id: 1,
      img: img_1,
    },
    {
      id: 2,
      img: img_2,
    },
    {
      id: 3,
      img: img_3,
    },
    {
      id: 4,
      img: img_4,
    },
    {
      id: 5,
      img: img_5,
    },
    {
      id: 6,
      img: img_6,
    },
    {
      id: 7,
      img: img_7,
    },
    {
      id: 8,
      img: img_8,
    },
    {
      id: 9,
      img: img_9,
    },
    {
      id: 10,
      img: img_10,
    },
    {
        id: 11,
        img: img_11,
      },
  ];
  const fileInput = useRef();
  const handleImageUpload = () =>{
    fileInput.current.click();
  }
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile.name);
      console.log(selectedFile);
    }
  };
  return (
    
    <>
      <nav className="flex justify-between w-[80%] mx-auto py-5 px-4 border-b-2 border-b-slate-300">
        <div className="flex items-center">
          <input className="w-5 h-5" type="checkbox" name="" id="" />
          <p className="ml-5 text-2xl">{3} File Selected</p>
        </div>
        <div>
          <button className="border-none text-2xl text-red-600 font-medium">
            Delete File
          </button>
        </div>
      </nav>

      <section className="grid grid-cols-5 gap-4 w-[80%] mx-auto my-8">
        {img_gallery.map((image, index) => {
          return (
            <>
              <div
                className={
                  index === 0
                    ? "col-span-2 row-span-2 border-2 rounded-md"
                    : " border-2 rounded-md"
                }
              >
                <img src={image.img} alt="" />
              </div>
            </>
          );
        })}
        <div className=" border-2 rounded-md flex flex-col justify-center items-center cursor-pointer gap-5
        "  onClick={handleImageUpload}>
          <img
            className="mx-auto"
            width="28"
            height="28"
            src="https://img.icons8.com/fluency-systems-regular/48/image--v1.png"
            alt="image--v1"
          />
          
          <p className="font-medium text-xl">Add Images</p>
        </div>
        <input
            type="file"
            id="fileInput"
            className="hidden "
            onChange={handleFileChange}
            accept="image/*"
            ref={fileInput}
          />
      </section>
    </>
  );
};

export default Home;
