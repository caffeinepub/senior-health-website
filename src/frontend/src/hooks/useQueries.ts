import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { Category, type WellnessArticle } from '../backend';

// Fetch all articles
export function useAllArticles() {
  const { actor, isFetching } = useActor();

  return useQuery<WellnessArticle[]>({
    queryKey: ['articles', 'all'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllArticles();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Fetch articles by category
export function useArticlesByCategory(category: Category) {
  const { actor, isFetching } = useActor();

  return useQuery<WellnessArticle[]>({
    queryKey: ['articles', 'category', category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getArticlesByCategory(category);
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

// Fetch single article by id
export function useArticleById(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<WellnessArticle | null>({
    queryKey: ['articles', 'id', id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getArticleById(id);
    },
    enabled: !!actor && !isFetching && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// Initialize content (call once to seed backend)
export function useInitializeContent() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.initializeContent();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
}

// Grouped articles by category
export function useGroupedArticles() {
  const { data: articles, isLoading, error } = useAllArticles();

  const grouped = {
    [Category.nutrition]: [] as WellnessArticle[],
    [Category.fitness]: [] as WellnessArticle[],
    [Category.sleep]: [] as WellnessArticle[],
    [Category.mentalHealth]: [] as WellnessArticle[],
  };

  if (articles) {
    for (const article of articles) {
      if (grouped[article.category] !== undefined) {
        grouped[article.category].push(article);
      }
    }
  }

  return { grouped, isLoading, error, articles };
}
