import Link from "../common/Link";
import CopyLink from "../common/CopyLink";

import { AtSign, GitHub } from "react-feather";

import DiscordLogo from "../assets/discord_logo";

import "./Contact.scss";

function Contact() {
  document.title = "Contact – valflrt.dev";

  return (
    <div className={"main contact"}>
      <h1>Contact</h1>
      <div className={"links"}>
        <Link
          className={"link"}
          to={"https://gh.valflrt.dev"}
          target={"_blank"}
        >
          <GitHub /> Github
        </Link>
        <CopyLink
          textToCopy={"valflrt#8436"}
          title={"discord"}
          className={"link"}
        >
          <DiscordLogo /> valflrt#8436
        </CopyLink>
        <CopyLink
          textToCopy={"val@valflrt.dev"}
          title={"email"}
          className={"link"}
        >
          <AtSign /> val@valflrt.dev
        </CopyLink>
      </div>
    </div>
  );
}

export default Contact;
