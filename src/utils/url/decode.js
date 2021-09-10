import LZString from "lz-string";

export default (str = "") => (str ? JSON.parse(LZString.decompressFromEncodedURIComponent(str)) : "");
