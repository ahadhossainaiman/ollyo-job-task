/* eslint-disable react/prop-types */



const ImageCart = ({image,index,handleSelectedImg,handleDragStart,handleDrop,draggedIndex,handleDragOver }) => {
    return (
        <div 
        className={
          index === 0
            ? `lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-1  border-4 rounded-md  relative cursor-grab transition-all ${draggedIndex===index?"border-4 border-gray-700":""}`
            : `border-2 rounded-md  relative cursor-grab transition-all ${draggedIndex===index?"border-2 border-gray-700":""}`
        }
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleDrop(e, index)}
        onDragOver={(e) => handleDragOver(e,index) }
      >
        <img src={image.img} alt="" className={draggedIndex===index?"scale-75":""} />
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
    );
};

export default ImageCart;