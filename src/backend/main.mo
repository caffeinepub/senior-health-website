import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type ArticleId = Text;

  type Category = {
    #nutrition;
    #fitness;
    #mentalHealth;
    #sleep;
  };

  type WellnessArticle = {
    id : ArticleId;
    title : Text;
    content : Text;
    category : Category;
    author : Text;
  };

  let articles = Map.empty<ArticleId, WellnessArticle>();

  public shared ({ caller }) func initializeContent() : async () {
    if (articles.size() > 0) { Runtime.trap("Content has already been initialized.") };

    let initialArticles = [
      {
        id = "1";
        title = "The Importance of Hydration";
        content = "Staying hydrated is crucial for overall well-being. Aim for at least 8 glasses of water a day.";
        category = #nutrition;
        author = "Dr. Healthy";
      },
      {
        id = "2";
        title = "Morning Stretch Routine";
        content = "Start your day with a 10-minute stretch routine to improve flexibility and reduce stress.";
        category = #fitness;
        author = "Coach Fit";
      },
      {
        id = "3";
        title = "Mindfulness Meditation";
        content = "Spend 15 minutes each day practicing mindfulness meditation to boost mental clarity.";
        category = #mentalHealth;
        author = "CalmGuide";
      },
      {
        id = "4";
        title = "Sleep Hygiene Tips";
        content = "Maintain a consistent sleep schedule and avoid screens before bedtime for better sleep quality.";
        category = #sleep;
        author = "Dr. Dream";
      },
    ];

    for (article in initialArticles.values()) {
      articles.add(article.id, article);
    };
  };

  public query ({ caller }) func getArticlesByCategory(category : Category) : async [WellnessArticle] {
    articles.toArray().filter(func((_, article)) { article.category == category }).map(func((_, article)) { article });
  };

  public query ({ caller }) func getArticleById(id : ArticleId) : async WellnessArticle {
    switch (articles.get(id)) {
      case (null) { Runtime.trap("Article not found") };
      case (?article) { article };
    };
  };

  public query ({ caller }) func getAllArticles() : async [WellnessArticle] {
    articles.values().toArray();
  };
};
