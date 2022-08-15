import React, { useCallback, useContext, createContext, useState } from 'react';
import contentfulService from 'services/ContentfulService';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [audios, setAudios] = useState([]);
    const [isAppNameVisible, setIsAppNameVisible] = useState(false);
    const [isHeaderInverted, setIsHeaderInverted] = useState(false);
    const [isLoadingAudios, setIsLoadingAudios] = useState(false);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    const getVideos = useCallback(async () => {
        setIsLoadingPosts(true);
        const response = await contentfulService.getAllPosts();
        setPosts(response?.items || []);
        setIsLoadingPosts(false);
    }, []);

    const getAudios = useCallback(async () => {
        setIsLoadingAudios(true);
        const response = await contentfulService.getAllPosts('audio');
        setAudios(response?.items || []);
        setIsLoadingAudios(false);
    }, []);

    const getAudiosById = (id) => {
        return audios?.filter((post) => post?.fields?.type === id)?.map((post) => ({ ...post?.fields }));
    };

    const getVideosById = (id) => {
        return posts?.filter((post) => post?.fields?.type === id)?.map((post) => ({ ...post?.fields }));
    };

    const value = {
        audios,
        getAudios,
        getAudiosById,
        getVideos,
        getVideosById,
        isAppNameVisible,
        isHeaderInverted,
        isLoadingAudios,
        isLoadingPosts,
        isMenuOpen,
        posts,
        setIsAppNameVisible,
        setIsHeaderInverted,
        setIsMenuOpen
    };

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
