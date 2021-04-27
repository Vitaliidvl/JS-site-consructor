import image from './assets/image.png';
import {
  TextBlock,
  ColumnsBlock,
  ImageBlock,
  TitleBlock,
} from './classes/blocks';

const text = `JS <a href="https://www.youtube.com/watch?v=pYBYBBdqHuo&t=862s">Video</a>`;

export const model = [
  new TitleBlock('Pure JavaScript site constructor', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'image',
  }),
  new ColumnsBlock(
    ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere'],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),
];
