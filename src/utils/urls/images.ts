import nextConfig from "../../../next.config";

export const BASE_URL = nextConfig.basePath || "";
export const IMAGE_URL = `${BASE_URL}/images`;
export const LOGO_URL = `${BASE_URL}/iconLogo.png`;
export const DESKTOP_IMG = `${BASE_URL}/icons/desktop.png`;
export const PEOPLE_IMG = `${BASE_URL}/icons/people.png`;
export const TELEPHONE_IMG = `${BASE_URL}/icons/telephone.png`;