import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import contentfulService from 'services/ContentfulService';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [audios, setAudios] = useState([]);
    const [isAppNameVisible, setIsAppNameVisible] = useState(false);
    const [isBurguerMenuInverted, setIsBurguerMenuInverted] = useState(false);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const [isHeaderInverted, setIsHeaderInverted] = useState(false);
    const [isTitleInverted, setIsTitleInverted] = useState(false);
    const [isLoadingAudios, setIsLoadingAudios] = useState(false);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTabOpen, setIsTabOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (isHeaderInverted) {
            setIsBurguerMenuInverted(true);
            setIsTitleInverted(true);
        } else {
            setIsBurguerMenuInverted(false);
            setIsTitleInverted(false);
        }
    }, [isHeaderInverted]);

    useEffect(() => {
        if (isBurguerMenuInverted && isTitleInverted) setIsHeaderInverted(true);
        if (!isBurguerMenuInverted && !isTitleInverted) setIsHeaderInverted(false);
    }, [isBurguerMenuInverted, isTitleInverted]);

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
        isBurguerMenuInverted,
        isDesktopMenuOpen,
        isHeaderInverted,
        isLoadingAudios,
        isLoadingPosts,
        isMenuOpen,
        isTabOpen,
        isTitleInverted,
        posts,
        setIsAppNameVisible,
        setIsBurguerMenuInverted,
        setIsDesktopMenuOpen,
        setIsHeaderInverted,
        setIsMenuOpen,
        setIsTabOpen,
        setIsTitleInverted
    };

    return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
