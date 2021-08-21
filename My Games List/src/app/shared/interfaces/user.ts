export interface IUser {
    _id: string;
    email: string;
    planToPlay: Array<any>;
    finishedGames: Array<any>;
    profilePic: String;
    profileSummary: String;
    age: Number;
}