import React from "react";

const InforProduct = () => {
  return (
    <div className="rounded-md bg-white overflow-hidden px-4 mt-3 ">
      <div className="border-b border-gray-300 py-3">
        <div className="font-bold text-xl">Thông tin sản phẩm</div>
        <table className="w-1/2 mt-5">
          <tr>
            <td className="text-gray-500">Tác giả</td>
            <td>Vĩ Nhân</td>
          </tr>
          <tr>
            <td className="text-gray-500">Số trang</td>
            <td>Vĩ Nhân</td>
          </tr>
          <tr>
            <td className="text-gray-500">Hình thức</td>
            <td>Vĩ Nhân</td>
          </tr>
          <tr>
            <td className="text-gray-500">NXB</td>
            <td>Vĩ Nhân</td>
          </tr>
          <tr>
            <td className="text-gray-500">Năm XB</td>
            <td>Vĩ Nhân</td>
          </tr>
        </table>
      </div>
      <div className="mt-3">
        <div className="font-medium ">
          Khi Bạn Đang Mơ Thì Người Khác Đang Nỗ Lực (2022)
        </div>
        <div className="font-light">vvvvvvvvvv</div>
      </div>
    </div>
  );
};

export default InforProduct;
