import backgroundImage from "../../img/stars.jpg";

function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "20rem",
        // backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "gray",
        objectFit: "cover",
      }}
    ></div>
  );
}

export default Header;
