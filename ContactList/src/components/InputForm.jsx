import { useRef } from "react";

function InputForm({ handleAddContact }) {
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleSubmit = async (e) => {
    if (nameInputRef.current.value && phoneInputRef.current.value) {
      const contact = {
        name: nameInputRef.current.value,
        phone: phoneInputRef.current.value,
      };
      handleAddContact(contact);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
    nameInputRef.current.value = "";
    phoneInputRef.current.value = "";
  };
  return (
    <div className="w-1/3 mx-auto p-6 rounded-lg shadow-md bg-white border-2 border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-4">Biểu mẫu liên hệ</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium">
            Họ tên:
          </label>
          <input
            ref={nameInputRef}
            id="name"
            type="text"
            placeholder="Nhập họ tên của bạn"
            className="p-2 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 font-medium">
            Số điện thoại:
          </label>
          <input
            ref={phoneInputRef}
            id="phone"
            type="text"
            placeholder="Nhập số điện thoại của bạn"
            className="p-2 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="text-center my-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 w-11/12 p-2 rounded-lg text-white font-semibold hover:bg-blue-600 "
        >
          Thêm liên hệ
        </button>
      </div>
    </div>
  );
}

export default InputForm;
