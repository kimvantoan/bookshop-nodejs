import React from "react";

const InforProduct = ({product}) => {
  return (
    <div className="rounded-md bg-white overflow-hidden px-4 mt-3 ">
      <div className="border-b border-gray-300 py-3">
        <div className="font-bold text-xl">Thông tin sản phẩm</div>
        <table className="w-1/2 mt-5">
          <tr>
            <td className="text-gray-500">Tác giả</td>
            <td>{product.authorName}</td>
          </tr>
          <tr>
            <td className="text-gray-500">Số trang</td>
            <td>{product.pageCount}</td>
          </tr>
          <tr>
            <td className="text-gray-500">Hình thức</td>
            <td>{product.form}</td>
          </tr>
          <tr>
            <td className="text-gray-500">NXB</td>
            <td>{product?.publish?.publisher}</td>
          </tr>
          <tr>
            <td className="text-gray-500">{product?.publish?.publishDate}</td>
            <td>Vĩ Nhân</td>
          </tr>
        </table>
      </div>
      <div className="mt-3 py-3">
        <div className="font-medium ">
          {product.bookTitle}
        </div>
        <div className="font-light">{product.description}</div>
      </div>
    </div>
  );
};

export default InforProduct;
