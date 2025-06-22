import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setIsAuth } = useContext(CartContext);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuth") === "true";
    if (isAuthenticated) {
      setIsAuth(true);
      navigate("admin");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email) validationErrors.email = "Email es requerido";
    if (!password) validationErrors.password = "La password es requerida";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("data/users.json");
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setErrors({ email: "credenciales inválidas" });
        console.log(errors);
      } else {
        console.log(foundUser.role);
        if (foundUser.role === "admin") {
          setIsAuth(true);
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
      setErrors({ email: "Algo salio mal. Por favor, intentelo mas tarde" });
    }
  };

  return (
    <AuthContext.Provider
      value={{ email, setEmail, password, setPassword, errors, handleSubmit }}
    >
      {children}
    </AuthContext.Provider>
  );
};
