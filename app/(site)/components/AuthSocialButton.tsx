"use client";

import React from "react";
import { IconType } from "react-icons";

export interface IAuthSocialButtonProps {
  Icon: IconType;
  onClick: () => void;
}
const AuthSocialButton: React.FC<IAuthSocialButtonProps> = (props) => {
  const { Icon, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className=" inline-flex 
      w-full 
      justify-center 
      rounded-md bg-white 
      py-2 
      text-gray-500 
      shadow-sm 
      ring-1 
      ring-inset 
      ring-gray-300 
      hover:bg-gray-50 
      focus:outline-offset-0"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
