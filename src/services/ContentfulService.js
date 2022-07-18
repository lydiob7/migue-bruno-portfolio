import client from './contentfulConfig';

class ContentfulService {
    async getAllPosts() {
        try {
            const response = await client.getEntries({
                select: 'fields',
                order: 'sys.createdAt'
            });
            return response || [];
        } catch (error) {
            console.error(error);
        }
    }

    async getSinglePost(postId) {
        try {
            const response = await client.getEntry(postId);
            return response || {};
        } catch (error) {
            console.error(error);
        }
    }
}

const instance = new ContentfulService();

export default instance;
