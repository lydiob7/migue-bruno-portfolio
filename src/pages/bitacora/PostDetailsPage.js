import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import contentfulService from 'services/ContentfulService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            if (node.data?.target?.fields?.file?.contentType?.includes('image'))
                return (
                    <div className="max-w-full h-auto">
                        <img
                            className="h-full mx-auto my-12"
                            src={node.data?.target?.fields?.file?.url}
                            alt={node.data?.target?.fields?.file?.fileName}
                        />
                    </div>
                );
            if (node.data?.target?.fields?.file?.contentType?.includes('audio'))
                return (
                    <audio controls className="mx-auto my-12">
                        <source
                            src={node.data?.target?.fields?.file?.url}
                            type={node.data?.target?.fields?.file?.contentType}
                        />
                    </audio>
                );
        },
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-green my-3">{children}</p>,
        [BLOCKS.HEADING_4]: (node, children) => (
            <h4 className="font-primary text-orange text-3xl md:text-4xl my-16">{children}</h4>
        )
    }
};

const PostDetailsPage = () => {
    const { id } = useParams();

    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);

    useLayoutEffect(() => {
        setColorScheme('orange');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    const getPost = useCallback(async (id) => {
        const response = await contentfulService.getSinglePost(id);
        setPost(response?.fields);
        setLoading(false);
    }, []);

    useEffect(() => {
        getPost(id);
    }, [getPost, id]);

    if (loading) return <div>Cargando...</div>;

    return (
        <div>
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="object-cover w-screen"
                    src={post?.headerBg?.fields?.file?.url}
                    alt={post?.headerBg?.fields?.title}
                />
                <div className="absolute bottom-0 left-0 w-screen">
                    <h1 className="text-4xl md:text-5xl font-primary text-orange lowercase mb-20 w-5/6 xl:w-4/6 mx-auto z-20">
                        {post?.title}
                    </h1>
                </div>
            </div>
            <div className="w-5/6 xl:w-4/6 mx-auto my-24 text-green text-lg">
                <div>{documentToReactComponents(post?.content, RICHTEXT_OPTIONS)}</div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
