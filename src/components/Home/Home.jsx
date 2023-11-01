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
import { useRef, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Home = () => {
  const img_gallery = [
    {
      id: 1,
      img: img_1,
      isChecked: false,
    },
    {
      id: 2,
      img: img_2,
      isChecked: false,
    },
    {
      id: 3,
      img: img_3,
      isChecked: false,
    },
    {
      id: 4,
      img: img_4,
      isChecked: false,
    },
    {
      id: 5,
      img: img_5,
      isChecked: false,
    },
    {
      id: 6,
      img: img_6,
      isChecked: false,
    },
    {
      id: 7,
      img: img_7,
      isChecked: false,
    },
    {
      id: 8,
      img: img_8,
      isChecked: false,
    },
    {
      id: 9,
      img: img_9,
      isChecked: false,
    },
    {
      id: 10,
      img: img_10,
      isChecked: false,
    },
    {
      id: 11,
      img: img_11,
      isChecked: false,
    },
  ];
  const [selectedImg, setSelectedImg] = useState(img_gallery);
  const [deleteImage, setDeleteImage] = useState([]);
  const fileInput = useRef();

  const handleSelectedImg = (id) => {
    const updateSelectedImg = selectedImg.map((img) => {
      return img.id === id ? { ...img, isChecked: !img.isChecked } : img;
    });

    const deleteItemCount = updateSelectedImg.filter((image) => {
      if (image.isChecked) {
        return image;
      }
    });
    setDeleteImage(deleteItemCount);
    setSelectedImg(updateSelectedImg);
  };
  console.log(selectedImg);
  console.log(deleteImage);

  const handleDeleteImage = () => {
    const remainingImage = selectedImg.filter((image) => {
      if (!image.isChecked) {
        return image;
      }
    });
    console.log(remainingImage);
    // console.log(deleteIImage);
    setSelectedImg(remainingImage);
    setDeleteImage([]);
  };

  const handleImageUpload = () => {
    fileInput.current.click();
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile.name);
      console.log(selectedFile);
    }
  };

  return (
    <section className="w-[85%] mx-auto my-10">
   
      {deleteImage.length > 0 ? (
        <>
          <nav className="flex bg-white rounded-t-md justify-between w-[80%] mx-auto py-5 px-4 border-b-2 border-b-slate-300">
            <div className="flex items-center">
              <input
                checked={true}
                className="w-5 h-5"
                type="checkbox"
                name=""
                id=""
              />
              <p className="ml-5 text-2xl font-medium">
                {deleteImage.length === 1
                  ? `${deleteImage.length} File Selected`
                  : `${deleteImage.length} Files Selected`}
              </p>
            </div>
            <div>
              <button
                onClick={handleDeleteImage}
                className="border-none text-2xl text-red-600 font-medium"
              >
                Delete File
              </button>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className=" text-3xl bg-white rounded-t-md font-bold w-[80%] mx-auto py-5 px-4 border-b-2 border-b-slate-300">
            <h1>Gallery</h1>
          </nav>
        </>
      )}

      <section className="grid rounded-b-md bg-white grid-cols-5 gap-4 w-[80%] mx-auto py-8 px-5">
      <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="boxes" direction="horizontal">
        {selectedImg.map((image, index) => {
          return (
            <>
              <div
                className={
                  index === 0
                    ? "col-span-2 row-span-2 border-2 rounded-md  relative"
                    : " border-2 rounded-md  relative "
                }
              >
                <img src={image.img} alt="" />
                {/* hover */}
                <div
                  className={
                    image.isChecked
                      ? `bg-[rgba(236,108,108,0.7)] absolute h-full w-full left-0 top-0 bottom-0 right-0  transition-all opacity-50`
                      : `bg-[rgba(0,0,0,0.7)] absolute h-full w-full left-0 top-0 bottom-0 right-0 opacity-0 transition-all hover:opacity-50`
                  }
                >
                  <input
                    checked={image.isChecked}
                    onChange={() => handleSelectedImg(image.id)}
                    className="absolute top-5 left-5 w-5 h-5"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </>
          );
        })}
         </Droppable>
        </DragDropContext>
        <div
          className=" border-2 rounded-md  flex flex-col justify-center items-center cursor-pointer gap-5 
        "
          onClick={handleImageUpload}
        >
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
    </section>
  );
};

export default Home;
