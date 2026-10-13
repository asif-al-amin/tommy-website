import React, { useState } from 'react';

const ProductGallery = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[28px] border border-[#edf1f0] bg-[#f8f7f5] p-3">
        <img src={activeImage} alt={title} className="h-[420px] w-full object-cover rounded-[20px]" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`overflow-hidden rounded-2xl border-2 transition-all ${
              activeImage === image ? 'border-[#ef7f22]' : 'border-transparent'
            }`}
          >
            <img src={image} alt={`${title} ${index + 1}`} className="h-24 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
