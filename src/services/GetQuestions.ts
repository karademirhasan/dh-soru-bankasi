import { Question } from 'types/interfaces';

export const getQuestions = async (): Promise<Question[]> => {
  const response = await fetch('data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: Question[] = await response.json();
  return data;
};
