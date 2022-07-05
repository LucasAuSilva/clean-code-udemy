export interface LoadAnswersBySurveyId {
  loadAnswers: (surveyId: string) => Promise<string[]>
}
