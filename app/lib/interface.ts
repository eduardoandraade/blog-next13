export interface Post {
    title: string;
    overview: string;
    content: any;
    imageUrl: string;
    _id: string;
    slug: {
        current: string;
    }
    _createdAt: string;
}

