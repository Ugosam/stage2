export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    country: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    vote_count: number;
    overview: string,
    setSelected: React.Dispatch<React.SetStateAction<{}>>;
    setMovieClicked: React.Dispatch<React.SetStateAction<{}>>;
}
