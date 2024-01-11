export const AUTHENTICATED = 'AUTHENTICATED'
export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED' 
export const SET_USER_NAME = 'SET_USER_NAME';

const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const deleteToken = () => {
  localStorage.removeItem("token");
}

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const token = response.headers.get("Authorization");
        setToken(token);
        const userJson = await response.json();
        dispatch({ type: AUTHENTICATED, payload: userJson });
      } else {
        const errors = await response.json();
        dispatch({ type: NOT_AUTHENTICATED });
        return Promise.reject(errors);
      }
    } catch (error) {
      // Gérer les erreurs de la requête
      console.error("Erreur lors de la requête de connexion :", error);
      dispatch({ type: NOT_AUTHENTICATED });
      return Promise.reject(error);
    }
  };
};

export const getUserName = () => {
  return async (dispatch) => {
    try {
      const token = getToken();
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userJson = await response.json();
        const { userName } = userJson;
        dispatch({ type: 'SET_USER_NAME', payload: userName });
      } else {
        // Gérer l'erreur lors de la récupération du nom d'utilisateur
        dispatch({ type: 'SET_USER_NAME', payload: null });
      }
    } catch (error) {
      console.error('Erreur lors de la requête pour récupérer le nom d\'utilisateur :', error);
      dispatch({ type: 'SET_USER_NAME', payload: null });
    }
  };
};
