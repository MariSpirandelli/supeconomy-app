/* type AlertOptions = {
  title: string;
  body?: string | undefined;
  timeout?: number | undefined;
  dismissable: boolean;
  dismissableButtonLabel?: string | undefined;
}; */

export interface SEInternalRefType {
  state: SEStateType;
}

export type SEStateType = {
  isAuthenticated: boolean

  /* isLoading: boolean;
  isAsyncLoading: boolean;
  isSyncing: boolean;

  alert?: AlertOptions | null;

  activeMenu: {
    menuType:
      | "sticker"
      | "printableColor"
      | "strokeColorOnTextbox"
      | "fillColorOnTextbox"
      | "fontFamilyOnTextbox"
      | "fillColorOnAllTextboxes";
  } | null;

  isSupportedBrowser: boolean;

  productId: number | string | null; */
}
