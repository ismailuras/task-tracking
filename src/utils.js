import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { ROLES } from "./constants";

export const getAvatar = (seed) => {
  const avatar = createAvatar(lorelei, {
    seed,
  });

  return avatar.toDataUri();
};

export const truncate = (str, size = 50) => {
  return `${str.substring(0, size)}...`;
};

export const taskActionPermissionCheck = (ownerID) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const isAdmin = loggedInUser.role === ROLES.ADMIN;
  const isTaskOwner = loggedInUser.id === ownerID;
  return isAdmin || isTaskOwner;
};
