
export interface IGame {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    scores: [
        {
            userId: string,
            score: number
        }
    ];
    __v: number;
}