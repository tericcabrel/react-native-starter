import { MenuItemData } from "./types";

export const USER_STORAGE_KEY = "user_token";
export const STATUS_BAR_HEIGHT = 20;
export const SAFE_VIEW_AREA_HEIGHT = 44;

export enum MENU_IDS {
  profile = "profile",
  language = "language",
  about = "about"
}

export const MENU_ITEMS: MenuItemData[] = [
  {
    id: MENU_IDS.profile,
    name: "menu.profile",
    icon: "verified-user"
  },
  {
    id: MENU_IDS.language,
    name: "menu.language",
    icon: "flag"
  },
  {
    id: MENU_IDS.about,
    name: "menu.about",
    icon: "info"
  }
];

export enum LOCALE_IDS {
  english = "en",
  french = "fr"
}

export const LOCALES = [
  {
    id: LOCALE_IDS.english,
    name: "locale.english"
  },
  {
    id: LOCALE_IDS.french,
    name: "locale.french"
  }
];
