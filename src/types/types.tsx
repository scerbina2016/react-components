export interface ICard {

    id?: number;
    title?: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];

}

export interface ITodo {
    id?: number;
    title?: string;
    completed: boolean;
}