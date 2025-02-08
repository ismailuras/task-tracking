import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

export const getAvatar = (seed) => {
  const avatar = createAvatar(lorelei, {
    seed,
  });

  return avatar.toDataUri();
};

export const truncate = (str, size = 50) => {
  return `${str.substring(0, size)}...`;
};
