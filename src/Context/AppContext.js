import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]); 
    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // Data Filling
    async function fetchBlogPosts(page=1, tag=null, category) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        
        //how to write the url is always mentioned in the API's document
        if(tag) {   
            url += `&tag=${tag}`;
        }   
        if(category) {
            url += `&category=${category}`;
        }
         
        try {
            const result = await fetch(url);
            const data = await result.json();
            if (!data.posts || data.posts.length === 0)
                throw new Error("Something Went Wrong");
            
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch (e) {
            setPage(1); 
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    } 

    function handlerPageChange(page) {
        navigate({search: `?page=${page}`}); //if we want to add something in existing url and its paths then we use search
        setPage(page);
    }

    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        handlerPageChange,
        fetchBlogPosts
    };
    //step2: apply the Provider
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
