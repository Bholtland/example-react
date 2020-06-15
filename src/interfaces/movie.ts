import Category from './category';

export default interface Movie {
    id: number,
    name: string,
    categories: Array<Category>
    duration: number
}