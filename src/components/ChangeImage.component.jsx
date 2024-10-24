import React, { useRef, useState } from "react";
import useProfileStore from "../store/useProfileStore";
import { HiCamera } from "react-icons/hi2";
import api from "../api/Api";
import useCookie from "react-use-cookie";
import toast from "react-hot-toast";
import { tailspin } from "ldrs";
tailspin.register();

const ChangeImageComponent = () => {
  const {
    user: { name, profile_image, email },
    setUser,
  } = useProfileStore();

  const [userToken, setUserToken] = useCookie("my_token");
  const [profileToken, setProfileToken] = useCookie("my_profile");

  const [uploading, setUploading] = useState(false);

  const fileImageRef = useRef();

  const fileImageHandler = async (event) => {
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);

    setUploading(true);

    const res = await fetch(api + "/user-profile/change-profile-image", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Profile image changed successfully");
      setUploading(false);
      setProfileToken(JSON.stringify(json.user));
      setUser(json.user);
    } else {
      toast.error(json.message);
    }
  };

  const uploadImageHandler = () => {
    fileImageRef.current.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
      <div className="shrink-0">
        <div className=" relative border flex h-20 w-20 items-center justify-center rounded-full">
          <img
            className="object-cover object-top max-w-full rounded-full border"
            width="100"
            height="100"
            src={
              profile_image
                ? profile_image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s"
            }
          />
          <button
            disabled={uploading}
            onClick={uploadImageHandler}
            className="absolute -bottom-1 disabled:pointer-events-none right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-gray-400 hover:bg-gray-500 p-1 text-sm text-white"
          >
            {uploading ? (
              <l-tailspin
                size="12"
                stroke="2"
                speed="0.9"
                color="white"
              ></l-tailspin>
            ) : (
              <HiCamera className="size-3" />
            )}
          </button>
        </div>
      </div>

      <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center text-center">
        <h4 className="w-full truncate text-lg font-bold text-slate-700">
          {name}
        </h4>
        <p className="w-full truncate text-sm text-slate-500">{email}</p>
      </div>

      <div className="hidden">
        <input
          ref={fileImageRef}
          onChange={fileImageHandler}
          type="file"
          name="profile_image"
        />
      </div>
    </div>
  );
};

export default ChangeImageComponent;
