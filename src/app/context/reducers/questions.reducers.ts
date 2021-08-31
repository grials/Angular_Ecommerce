import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { ILanguageQuestions } from 'src/app/interfaces/Objects/questions.interface';

export class QuestionsPageReducers {
  static reducersPageQuestions(
    state: ILanguageQuestions | {} = {},
    action: IAction
  ): ILanguageQuestions | {} {
    try {
      switch (action.type) {
        case '':
          return state;

        default:
          return state;
      }
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}
