import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const NotFound = () => {
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/login");
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const torch = document.querySelector<HTMLElement>("#torch");
      const rect = buttonRef?.current?.getBoundingClientRect();

      if (torch) {
        setIsHovering(
          rect &&
            rect?.x <= event.x &&
            event.x < rect?.x + 150 &&
            rect?.y < event.y &&
            event.y < rect?.y + 40
            ? true
            : false
        );
        torch.style.top = event.y + "px";
        torch.style.left = event.x + "px";
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={styles.text}>
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>
          Sorry we cant find what you are looking for 'cuz its so dark in here
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleGoBack}
          ref={buttonRef}
          className={isHovering ? styles.button : styles.buttonDark}
        >
          Go back
        </button>
      </div>
      <div className={styles.torch} id="torch"></div>
    </>
  );
};

export default NotFound;
