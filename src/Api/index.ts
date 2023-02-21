import axios from "axios";
import { Movie, User } from "./types";
import swal from "sweetalert";

axios.defaults.baseURL = "https://api-movies-alpha.vercel.app/";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

function handleError(text: string, description: string) {
  swal({
    title: text,
    text: description,
    icon: "warming",
    timer: 5000,
  });
}

export const api = {
  getMovies: async (): Promise<Movie[] | undefined> => {
    try {
      const response = await axios.get(`/movies`);
      return response.data;
    } catch (err: any) {
      handleError("Erro no servidor!", "Erro no servidor, tente novamente!");
    }
  },

  getUsers: async (): Promise<User[] | undefined> => {
    try {
      const response = await axios.get(`/users`);
      return response.data;
    } catch (err: any) {
      handleError("Erro no servidor!", "Erro no servidor, tente novamente!");
    }
  },

  getUserId: async (id: string | undefined) => {
    try {
      const response = await axios.get(`/users/${id}`);

      return response.data;
    } catch (err) {
      handleError("Erro", "Aconteceu algun erro, tente novamente");
    }
  },
};
