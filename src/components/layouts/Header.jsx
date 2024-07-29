import backgroundImage from "../../img/stars.jpg";

function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "20rem",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1 style={{ fontSize: "3rem", margin: 0 }}>테스트 이미지</h1>
    </div>
  );
}

export default Header;
