import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import PostCard from './PostCard';

import arrowBack from 'assets/images/arrow-back-yellow.svg';

const PostsListPage = () => {
    const { getPosts, isLoadingPosts, posts, setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } =
        useContextInfo();

    const navigate = useNavigate();

    useLayoutEffect(() => {
        getPosts();
    }, [getPosts]);

    useLayoutEffect(() => {
        setColorScheme('yellow');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="bg-green min-h-screen">
            <div className="w-5/6 xl:w-4/6 mx-auto">
                <div className="pt-36 pb-16 md:min-h-[40vh]">
                    <div onClick={() => navigate(-1)} className="relative w-8 cursor-pointer mb-6">
                        <img src={arrowBack} alt="" className="w-full" />
                    </div>
                    <h2 className="text-yellow text-2xl md:text-4xl font-bold font-primary">
                        bitácora{' '}
                        <span
                            style={{ fontFamily: 'SUNN-Line-Bold' }}
                            className="relative top-8 md:top-12 left-[-1rem] md:left-0 font-secondary text-4xl md:text-8xl"
                        >
                            relatos en movimiento
                        </span>
                    </h2>

                    <div className="text-beige text-sm md:text-lg mt-20">
                        {/* <p className="">
                            Relatos Visuales es un proyecto donde eso que no tuvo lugar sale y se manifiesta con fuerza
                            animal.
                        </p>
                        <p className="mt-2">
                            Deseamos que conecten con estos relatos/historias al igual que nosotras y llevarlos a
                            recorrer vidas y territorios.
                        </p> */}
                    </div>
                </div>
                <div className="pb-20">
                    {isLoadingPosts && <div>Cargando...</div>}

                    {posts && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {posts.map((relato) => (
                                <PostCard
                                    className="mb-20"
                                    id={relato?.sys?.id}
                                    item={relato?.fields}
                                    key={relato?.sys?.id}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostsListPage;
