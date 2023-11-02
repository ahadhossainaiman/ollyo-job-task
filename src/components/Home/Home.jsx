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
import ImageCart from "../ImageCart/ImageCart";


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
  const [draggedIndex, setDraggedIndex] = useState(null);
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
  

  const handleDeleteImage = () => {
    const remainingImage = selectedImg.filter((image) => {
      if (!image.isChecked) {
        return image;
      }
    });
    setSelectedImg(remainingImage);
    setDeleteImage([]);
  };

  const handleFileClick = () => {
    fileInput.current.click();
  };
  const handleImageUpload = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const id = selectedImg.length + i + 1;
      console.log(id);
      const img_path = URL.createObjectURL(file);

      const newImage = { id, img: img_path, isChecked: false };
      console.log(newImage);

      setSelectedImg((prevImg) => [...prevImg, newImage]);

    }
    e.target.value = null;
  };

  const handleSelectedChange = ()=>{
    const updateSelectedImg = selectedImg.map((img) => {
      return { ...img, isChecked: false }
    });
    setSelectedImg(updateSelectedImg)
    setDeleteImage([])
  }


  // dnd
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
    setDraggedIndex(index);
  };
  const handleDrop = (e, newIndex) => {
    const startIndex = e.dataTransfer.getData('index');
    const updatedBoxes = [...selectedImg];
    const [draggedBox] = updatedBoxes.splice(startIndex, 1);
    updatedBoxes.splice(newIndex, 0, draggedBox);
    setSelectedImg(updatedBoxes);
    setDraggedIndex(null);
  };
  const handleDragOver = (e,index) => {
    e.preventDefault();
    if (index !== draggedIndex) {
     
      setDraggedIndex(index);
    }
  };

  return (
    <div className="w-[85%] mx-auto my-10">
      {deleteImage.length > 0 ? (
        <>
          <nav className="flex lg:flex-row md:flex-col flex-col bg-white rounded-t-md justify-between w-[80%] mx-auto py-5 px-4 border-b-2 border-b-slate-300">
            <div className="flex items-center">
              <input
                checked={true}
                onChange={handleSelectedChange}
                className="w-5 h-5"
                type="checkbox"
                name=""
                id=""
              />
              <p className="ml-5 text-2xl font-medium ">
                {deleteImage.length === 1
                  ? `${deleteImage.length} File Selected`
                  : `${deleteImage.length} Files Selected`}
              </p>
            </div>
            <div>
              <button
                onClick={handleDeleteImage}
                className="border-none text-2xl text-red-600 font-medium md:mt-5 sm:mt-4"
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
      
      <section className="grid rounded-b-md bg-white lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 w-[80%] mx-auto py-8 px-5">
     
        {selectedImg?.map((image, index) => {
          return (
            <ImageCart
              key={index}
              image={image}
              index={index}
              handleSelectedImg={handleSelectedImg}
              handleDrop={handleDrop}
              handleDragStart={handleDragStart}
              draggedIndex={draggedIndex}
              handleDragOver={handleDragOver}
            />
          );
        })}

        <div
          className="border-2 border-dashed rounded-md  flex flex-col justify-center items-center w-[100%] cursor-pointer gap-5"
          onClick={handleFileClick}
        >
          <img
            className="mx-auto"
            width="100"
            height="100"
            src="https://img.icons8.com/fluency-systems-regular/48/image--v1.png"
            alt="image--v1"
          />

          <p className="font-bold sm:text-xl md:text-1xl md:pb-5 sm:pb-5">Add Images</p>
        </div>
        <input
          type="file"
          id="fileInput"
          className="hidden "
          onChange={handleImageUpload}
          accept="image/*"
          ref={fileInput}
        />
      </section>
    
    </div>
  );
};

export default Home;
