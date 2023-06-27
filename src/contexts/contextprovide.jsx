import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [watchedMovie,setWatchedMovie] = useState([])
    const [watchedTvShow,setWatchedTvShow] = useState([])
    const [loading,setLoading] = useState(true)
    const [latest,setLatest] = useState(true)
    const [logout,setLogout] = useState(true)
    const [icon,setIcon] = useState(false)
    const [show,setShow] = useState(true)
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('TOKEN') || null);
    const closeLatest = () => {
        setLatest(true)
      }
      const handleLogout = () => {
        setLogout(prevLogout => !prevLogout)
      }
        const handleLatest = () => {
          setLatest(prevLatest => !prevLatest)
        }
        const handleIcon = () => {
          setIcon(prevIcon => !prevIcon)
        }
        const handleShow = () => {
          setShow(prevShow => !prevShow)
        }
    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('TOKEN',token)
        } else {
            localStorage.removeItem('TOKEN')
        }
    }
    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
                loading,
                setLoading,
                latest,
                setLatest,
                logout,
                setLogout,
                show,
                setShow,
                icon,
                setIcon,
                closeLatest,
                handleLogout,
                handleLatest,
                handleIcon,
                handleShow,
                watchedMovie,
                setWatchedMovie,
                watchedTvShow,
                setWatchedTvShow,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
