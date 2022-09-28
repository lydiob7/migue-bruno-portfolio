import React, { createContext, useCallback, useContext, useState } from 'react';
import contentfulService from 'services/ContentfulService';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [audios, setAudios] = useState([]);
    const [isMusicOutOfScreen, setIsMusicOutOfScreen] = useState(true);
    const [isProjectsOutOfScreen, setIsProjectsOutOfScreen] = useState(true);
    const [imageToOpen, setImageToOpen] = useState(null);
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
        imageToOpen,
        isLoadingAudios,
        isLoadingPosts,
        isMenuOpen,
        isMusicOutOfScreen,
        isProjectsOutOfScreen,
        posts,
        setImageToOpen,
        setIsMenuOpen,
        setIsMusicOutOfScreen,
        setIsProjectsOutOfScreen
    };

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
