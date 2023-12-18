import React, { useRef, useState } from "react";
import QRCode from "qrcode";
import toast, { Toaster } from "react-hot-toast";
const HomeComponent = () => {
  let qrCode = JSON.parse(localStorage.getItem("qrCode")) || [];
  const [url, setUrl] = useState(null);

  let firstNameRef,
    lastNameRef,
    companyRef,
    phoneRef,
    websiteRef,
    visitorRef,
    emailRef,
    passwordRef = useRef();

  const IsEmpty = (value) => {
    return value.length === 0;
  };

  const Generate = (e) => {
    e.preventDefault();
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let company = companyRef.value;
    let phone = phoneRef.value;
    let website = websiteRef.value;
    let visitor = visitorRef.value;
    let email = emailRef.value;
    let password = passwordRef.value;

    let template = `
   First name : ${firstName} 
   Last name : ${lastName} 
   Company : ${company} 
   Phone : ${phone} 
   Website : ${website} 
   Visitor : ${visitor} 
   Email : ${email} 
   Password : ${password}  
   `;

    if (IsEmpty(firstName)) {
      toast.error("First name is required");
    } else if (IsEmpty(lastName)) {
      toast.error("Last name is required");
    } else if (IsEmpty(company)) {
      toast.error("Company is required");
    } else if (IsEmpty(phone)) {
      toast.error("Phone is required");
    } else if (IsEmpty(website)) {
      toast.error("Website is required");
    } else if (IsEmpty(visitor)) {
      toast.error("Visitor is required");
    } else if (IsEmpty(email)) {
      toast.error("Email is required");
    } else if (IsEmpty(password)) {
      toast.error("Password is required");
    } else {
      QRCode.toDataURL(template)
        .then((url) => {
          setUrl(url);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const save = () => {
    localStorage.setItem("qrCode", JSON.stringify([...qrCode, { url }]));
    toast.success("Save Successfully!");
    setUrl("");
    firstNameRef.value = "";
    lastNameRef.value = "";
    companyRef.value = "";
    phoneRef.value = "";
    websiteRef.value = "";
    visitorRef.value = "";
    emailRef.value = "";
    passwordRef.value = "";
  };
  return (
    <section>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="container  py-[80px]">
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-9 bg-white shadow-lg rounded-md p-[26px]">
            <div className=" mx-auto p-4 ">
              <h2 className="text-[26px] font-semibold">QR Code Generator:</h2>
              <form className="mt-[20px]" onSubmit={Generate}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                    >
                      First name
                    </label>
                    <input
                      ref={(input) => (firstNameRef = input)}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white -500 dark:focus:border-theme-500"
                      placeholder="John"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                    >
                      Last name
                    </label>
                    <input
                      ref={(input) => (lastNameRef = input)}
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white -500 dark:focus:border-theme-500"
                      placeholder="Doe"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                    >
                      Company
                    </label>
                    <input
                      ref={(input) => (companyRef = input)}
                      type="text"
                      id="company"
                      className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white -500 dark:focus:border-theme-500"
                      placeholder="Flowbite"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                    >
                      Phone number
                    </label>
                    <input
                      ref={(input) => (phoneRef = input)}
                      type="tel"
                      id="phone"
                      className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white -500 dark:focus:border-theme-500"
                      placeholder="123-45-678"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                    >
                      Website URL
                    </label>
                    <input
                      ref={(input) => (websiteRef = input)}
                      id="website"
                      className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white -500 dark:focus:border-theme-500"
                      placeholder="flowbite.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="visitors"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                    >
                      Unique visitors (per month)
                    </label>
                    <input
                      ref={(input) => (visitorRef = input)}
                      type="number"
                      id="visitors"
                      className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white -500 dark:focus:border-theme-500"
                      placeholder=""
                      required=""
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                  >
                    Email address
                  </label>
                  <input
                    ref={(input) => (emailRef = input)}
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white -500 dark:focus:border-theme-500"
                    placeholder="john.doe@company.com"
                    required=""
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                  >
                    Password
                  </label>
                  <input
                    ref={(input) => (passwordRef = input)}
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white -500 dark:focus:border-theme-500"
                    placeholder="•••••••••"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-theme hover:bg-theme focus:ring-4 focus:outline-none focus:ring-theme font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   "
                >
                  Generate free QR codes
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="bg-white shadow-lg rounded-md p-[26px]">
              <h2 className="text-[26px] font-semibold">Live preview:</h2>
              {!!url ? (
                <div>
                  <div>
                    <img src={url} alt="" className="w-[200px]" />
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={save}
                      className="text-white bg-theme hover:bg-theme focus:ring-4 focus:outline-none focus:ring-theme font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   "
                    >
                      Save QR codes
                    </button>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
