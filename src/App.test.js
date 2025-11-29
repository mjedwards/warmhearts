import { render, screen } from '@testing-library/react';
import App from './App';

test('renders inspiring hope link', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => {
    const hasText = (node) => node.textContent.replace(/\s+/g, ' ').includes('Inspiring hope');
    const elementHasText = hasText(element);
    const childrenDontHaveText = Array.from(element.children).every(
      (child) => !hasText(child)
    );
    return elementHasText && childrenDontHaveText;
  });
  expect(linkElement).toBeInTheDocument();
});
