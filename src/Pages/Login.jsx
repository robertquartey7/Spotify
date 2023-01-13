import React from "react";
import { Container, Button } from "react-bootstrap";
import { BsSpotify } from "react-icons/bs";

function Login() {
  const handleClick = () => {
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      // "user-modify-playback-state",
      // "user-read-playback-state",
      // "user-read-currently-playing",
      // "user-read-currently-played",
      // "user-read-playback-position",
      // "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${
      import.meta.env.VITE_CLIENT_ID
    }&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}&scope=${scope.join(
      " "
    )}&response_type=token&show_daialog=true`;
  };

  return (
    <div
      className="bg-dark "
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="m-auto">
        <Button
          variant="dark"
          className="text-success d-flex justify-content-center align-items-center gap-2 w-auto h-auto border rounded-5 px-4 "
          onClick={handleClick}
        >
          <BsSpotify />
          Connect to Spotify
        </Button>
      </div>
    </div>
  );
}

export default Login;
