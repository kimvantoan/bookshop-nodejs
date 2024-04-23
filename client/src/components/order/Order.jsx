import React from "react";
import Quantity from "../quantity/Quantity";

const Order = () => {
  return (
    <div className="rounded-md bg-white overflow-hidden p-4">
      <div className="flex gap-12">
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/hieu_kd/Frame_mgg_ncc_1080x1080-01.png"
          alt=""
          className="w-1/3"
        />
        <div className="flex flex-col gap-7">
          <div className=" text-2xl">
            Khi Bạn Đang Mơ Thì Người Khác Đang Nỗ Lực (2022)
          </div>
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <span>Nhà cung cấp: </span>
              <span className="font-bold">Minh Long</span>
            </div>
            <div>
              <span>Nhà xuất bản: </span>
              <span className="font-bold">Minh Long</span>
            </div>
            <div>
              <span>Tác giả: </span>
              <span className="font-bold">Minh Long</span>
            </div>
            <div>
              <span>Hình thức bìa: </span>
              <span className="font-bold">Minh Long</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-red-500 text-3xl font-bold">81.000</div>
            <s>123.000</s>
            <div className="font-bold p-1 bg-red-500 text-white rounded-md">
              -40%
            </div>
          </div>
          <div className="flex gap-7">
            <div className="text-gray-700 font-medium text-lg">Số lượng:</div>
            <Quantity/>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-5">
        <div className="px-3 py-3  border-2 border-red-600 text-red-600 font-medium rounded-lg">Thêm vào giỏ hàng</div>
        <div className="px-3 py-3  border-2 bg-red-600 text-white font-medium rounded-lg">Thêm vào giỏ hàng</div>
      </div>
    </div>
  );
};

export default Order;
