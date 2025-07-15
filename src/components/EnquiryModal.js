import React, { useState } from "react";
import axios from "axios";

const EnquiryModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email format";
    if (!formData.phone.match(/^\d{10,}$/))
      newErrors.phone = "Phone must be at least 10 digits";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://sevysis.com/api/enquiry/send", formData);
      setPopup({ type: "success", message: "Email sent successfully!" });
    } catch (err) {
      setPopup({
        type: "error",
        message: "Failed to send enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-2 sm:px-6">
        <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-lg shadow-lg max-h-[90vh] flex flex-col overflow-hidden">
          {/* Sticky header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
            <h2 className="text-xl font-semibold">Enquiry Form</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>

          {/* Scrollable form */}
          <form
            onSubmit={handleSubmit}
            className="flex-grow overflow-y-auto p-6 pt-8 space-y-4"
            style={{ flexGrow: 1, minHeight: 0 }}
          >
            {["name", "email", "phone", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  type="text"
                  value={formData[field]}
                  onChange={handleChange}
                  className={`mt-1 block w-full border rounded-md p-2 ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors[field] && (
                  <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {popup.type && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 shadow-md text-center w-80">
            <h3 className="text-lg font-semibold mb-4">{popup.message}</h3>
            {popup.type === "success" ? (
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={() => {
                  setPopup({ type: "", message: "" });
                  onClose(); // Close the modal
                }}
              >
                OK
              </button>
            ) : (
              <div className="space-x-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Send Again
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
                  onClick={() => setPopup({ type: "", message: "" })}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default EnquiryModal;
