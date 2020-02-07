import { dev } from "./dev";
import { prod } from "./prod";

export const keys = () => {
  return process.env.NODE_ENV === "production" ? prod : dev;
};

export default keys;
