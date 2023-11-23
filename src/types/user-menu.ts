export type UserMenuResponse = {
  menu: MenuType[];
};
export type MenuType = {
  id: string;
  name: string;
  route: Optional<string>;
  submenu: Optional<SubmenuType>;
};
export type ParentMenuType = {
  id: string;
  name: string;
  route: string;
};

export type SubmenuType = ParentMenuType[];
