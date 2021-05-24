import React from 'react';
import CustomButton from './CustomButton';

interface Product {
  title?: string;
  brief?: string;
  price?: string | number;
  pictureUrl?: string;
  thumb?: string;
}

const ProductTile = ({ title, price, pictureUrl, brief }: Product) => {
  return (
    <>
      {/* Product Card */}
      <div className="mx-2 w-72 lg:mb-0 mb-8">
        <div>
          <img
            src={
              pictureUrl ||
              'https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png'
            }
            className="w-full h-44"
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bookmark"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-blue-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-blue-500">Featured</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start">
              <h2 className="text-lg font-semibold leading-6">
                {title || 'iphone XS'}
              </h2>
            </div>
            <p className="text-sm text-gray-600 mt-2 leading-6 text-base">
              {'The Apple iPhone XS is available in 3 colors with 64GB memory Shoot amazing videos' ||
                brief}
            </p>
            <div className="flex items-center justify-end py-4">
              <h3 className="text-base text-grey-300 text-xl font-semibold">
                ${price || '350'}
              </h3>
            </div>
          </div>
          <CustomButton title={'Add to Cart'}>
            <span className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </span>
          </CustomButton>
        </div>
      </div>
      {/* Product Card end */}
    </>
  );
};

export default ProductTile;
