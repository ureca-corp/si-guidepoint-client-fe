import { atom, useRecoilState } from "recoil";

const GlobalDialogOpenState = atom({
  key: "globalDialogOpenState",
  default: {
    isOpen: false,
    msg: "",
    href: "",
  },
});

export const UseDialogOpen = () => {
  const [dialogState, setDialogState] = useRecoilState(GlobalDialogOpenState);

  const onErrorOpen = (msg: string) => {
    setDialogState({ isOpen: true, msg: msg, href: "" });
  };

  const onComfirmOpen = (msg: string, href?: string) => {
    setDialogState((old) => ({
      ...old,
      isOpen: true,
      msg: msg,
      href: href ?? "",
    }));
  };

  const onClose = () => {
    setDialogState({ isOpen: false, msg: "", href: "" });
  };

  return {
    openState: {
      value: dialogState.isOpen,
      onClose: onClose,
      onErrorOpen: onErrorOpen,
      onConfirmOpen: onComfirmOpen,
    },
    msgState: {
      value: dialogState.msg,
    },
    hrefState: {
      value: dialogState.href,
    },
  };
};
