import { useRef } from "react";

function InputForm({ addPhone }) {
  const phoneTypeRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const handleAddPhone = () => {
    if (phoneNumberRef.current && phoneTypeRef.current) {
      // alert if the input is empty
      if (phoneNumberRef.current.value === "") {
        alert("Vui lòng nhập số điện thoại");
        return;
      }
      const phone = {
        type: phoneTypeRef.current.value,
        number: phoneNumberRef.current.value,
      };
      addPhone(phone);
    }
  };

  return (
    <div className="flex flex-col w-1/3 mx-auto my-12  border-2 border-gray-500 rounded-lg shadow-lg px-4 py-2 space-y-4">
      <h1 className="font-bold text-xl text-center">Biểu mẫu điện thoại</h1>
      <div className="space-y-4">
        <label
          htmlFor="phoneType"
          className="block text-sm font-medium text-gray-700"
        >
          Loại điện thoại
        </label>
        <select
          ref={phoneTypeRef}
          id="phoneType"
          className="border-2 w-full px-2 py-1 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg"
        >
          <optgroup label="Cá nhân">
            <option value="Điện thoại nhà">Điện thoại nhà</option>
            <option value="Di động cá nhân">Điện thoại cá nhân</option>
          </optgroup>
          <optgroup label="Công việc">
            <option value="Điện thoại văn phòng">Điện thoại văng phòng</option>
            <option value="Di động công việc">
              Điện thoại di động công việc
            </option>
          </optgroup>
        </select>
      </div>
      <div className="space-y-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Số điện thoại
        </label>
        <input
          ref={phoneNumberRef}
          type="text"
          id="phoneNumber"
          placeholder="Nhập số điện thoại vào ô đây"
          className="border-2 w-full px-2 py-1 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg"
        />
      </div>

      <button
        onClick={handleAddPhone}
        className="w-2/3 mx-auto py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-xl font-bold text-white cursor-pointer mb-2"
      >
        Thêm điện thoại
      </button>
    </div>
  );
}

export default InputForm;
