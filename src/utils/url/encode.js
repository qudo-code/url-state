import LZString from "lz-string";

export default (str = "") => LZString.compressToEncodedURIComponent(JSON.stringify(str));
