import { Questions } from './question';
import categories from '../mocks/categories';
import levels from '../mocks/levels';

export type Category = typeof categories[number];

export type Quiz = {
    id: string,
    title: string,
    description?: string,
    category: Category,
    level: typeof levels[number],
    questions: Questions,
}
