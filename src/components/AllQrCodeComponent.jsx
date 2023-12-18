import React from "react";
import PopOver from "./PopOver";

const AllQrCodeComponent = () => {
  let qrCode = JSON.parse(localStorage.getItem("qrCode")) || [];

  console.log(qrCode.length);
  return (
    <section>
      <div className="container  py-[80px]">
        {qrCode.length === 0 ? (
          <div>
            <p className="text-red-500">No Qr code found</p>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-[20px] bg-white shadow-lg rounded-md p-[26px]">
            {qrCode.map((item, index) => (
              <div key={index} className="col-span-2 ">
                <PopOver item={[index, item]} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllQrCodeComponent;
