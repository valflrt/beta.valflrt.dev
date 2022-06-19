import CopyLink from "../common/CopyLink";

const Main = () => {
  document.title = "Home – valflrt.dev";

  let elapsedDays = (Date.now() / 1000 - 1108087200) / 60 / 60 / 24;

  return (
    <>
      <h1>Heya ! I'm valflrt !</h1>
      <p>
        I am a coding enthusiast, my real name is Valentin Fleurit. I was born
        at{" "}
        <CopyLink
          className={"link"}
          textToCopy={"1108087200"}
          title={`Alive for ${(elapsedDays / 365).toFixed()} years and ${(
            elapsedDays % 365
          ).toFixed()} days`}
        >
          <code>1108087200</code>
        </CopyLink>{" "}
        (Unix Epoch). I'm French and proud to be (oui oui baguette) and I like
        typescript.
      </p>
    </>
  );
};

export default Main;
