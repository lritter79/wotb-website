import socials from "../data/socialLinks.json";
import type { ComponentDictionary } from "../types/types";
import {
  faSpotify,
  faBandcamp,
  faApple,
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
  faCreativeCommonsZero,
} from "@fortawesome/free-brands-svg-icons";

export const socialsIconsDictionary: ComponentDictionary = {
  0: faFacebook,
  1: faInstagram,
  2: faYoutube,
  3: faTiktok,
  4: faCreativeCommonsZero,
};

export const musicIconsDictionary: ComponentDictionary = {
  0: faSpotify,
  1: faBandcamp,
  2: faApple,
};
export const visibleSocials = socials.slice(0, 3);
