import { RecommendationProps } from './recommendation.props';

export class Recommendation{
  id: string;
  providerId: string;
  recipientId: string;
  review: string;
  score: number;
  dateReview: Date;

  constructor(recommendationProps: RecommendationProps) {
    this.id = recommendationProps.id;
    this.providerId = recommendationProps.providerId;
    this.recipientId = recommendationProps.recipientId;
    this.review = recommendationProps.review;
    this.score = recommendationProps.score;
    this.dateReview = recommendationProps.dateReview;
  }
}
