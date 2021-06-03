export interface SEActionHandlerMap {
  logout: () => void;
  login: (token: string) => void;
}
