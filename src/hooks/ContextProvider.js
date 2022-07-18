import React, { useCallback, useContext, useEffect, createContext, useState } from 'react';
import contentfulService from 'services/ContentfulService';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [isAppNameVisible, setIsAppNameVisible] = useState(false);
    const [isAppLogoVisible, setIsAppLogoVisible] = useState(false);
    const [isHeaderInverted, setIsHeaderInverted] = useState(false);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        setIsLoadingPosts(true);
        const response = await contentfulService.getAllPosts();
        setPosts(response?.items || []);
        setIsLoadingPosts(false);
    }, []);

    const value = {
        getPosts,
        isAppLogoVisible,
        isAppNameVisible,
        isHeaderInverted,
        isLoadingPosts,
        isMenuOpen,
        posts,
        setIsAppLogoVisible,
        setIsAppNameVisible,
        setIsHeaderInverted,
        setIsMenuOpen
    };

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
