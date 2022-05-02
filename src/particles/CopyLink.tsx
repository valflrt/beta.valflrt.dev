import { FC, HTMLProps } from "react";
import toast from "react-hot-toast";

// Used to create a link that copies some text to clipboard
const CopyLink: FC<
  Omit<HTMLProps<HTMLSpanElement>, "onClick"> & {
    textToCopy: string;
    infoDelay?: number;
  }
> = (props) => {
  let { textToCopy, infoDelay, ...filteredProps } = props;

  let handleClick = () =>
    navigator.clipboard.writeText(props.textToCopy).then(() => {
      toast("Copied !", { duration: 2e3 });
    });

  return <span onClick={handleClick} {...filteredProps} />;
};

export default CopyLink;
