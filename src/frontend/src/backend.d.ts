import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface WellnessArticle {
    id: ArticleId;
    title: string;
    content: string;
    author: string;
    category: Category;
}
export type ArticleId = string;
export enum Category {
    mentalHealth = "mentalHealth",
    sleep = "sleep",
    fitness = "fitness",
    nutrition = "nutrition"
}
export interface backendInterface {
    getAllArticles(): Promise<Array<WellnessArticle>>;
    getArticleById(id: ArticleId): Promise<WellnessArticle>;
    getArticlesByCategory(category: Category): Promise<Array<WellnessArticle>>;
    initializeContent(): Promise<void>;
}
