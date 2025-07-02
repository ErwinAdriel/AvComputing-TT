import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {email, setEmail, password, setPassword, errors, handleSubmit} = useContext(AuthContext);
  
  return (
    <div class="pt-50 pb-20">
      <title>Ingresar | AvComputing</title>
      <div class="flex flex-col items-center justify-center mx-auto">
        <div class="w-full bg-slate-200 border-slate-600 border md:mt-0 sm:max-w-md xl:p-0 text-black">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl text-gray-900 font-bold leading-tight md:text-2xl">
              Inicia sesión con tu cuenta
            </h1>
            <form
              onSubmit={handleSubmit}
              class="space-y-4 md:space-y-6"
            >
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class={`placeholder-gray-400 ${errors.email ? 'border-red-800' : 'border-gray-300'} bg-gray-50 border block w-full p-3`}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <div className="text-red-800 font-normal">
                    <p>{errors.email}</p>
                  </div>
                )}
              </div>
              <div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  class={`placeholder-gray-400 bg-gray-50 border ${errors.password ? 'border-red-800' : 'border-gray-300'} block w-full p-3`}
                />
                {errors.password && (
                  <div className="text-red-800 font-normal">
                    <p>{errors.password}</p>
                  </div>
                )}
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-400">
                      Recordar
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-slate-900 hover:underline"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-slate-900 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Ingresar
              </button>
              <p class="text-sm font-light text-gray-500">
                Aún no tienes una cuenta?{" "}
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Registrarse
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;