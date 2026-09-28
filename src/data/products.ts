import type { Product } from '../types/content';

// Real AIIVA product assets. A product without an image is never rendered.
export const products: Product[] = [
{
  id: 'p01',
  name: 'Fan + Light Control',
  category: 'Fan + Light Control',
  description: 'A smart control interface designed for lighting and fan functions.',
  image: "/pasted-image.jpg",
  capabilities: ['Light', 'Fan', 'Control'],
  filters: ['Lighting', 'Fan', 'Controls']
},
{
  id: 'p02',
  name: 'Multi-Channel Smart Switch',
  category: 'Multi-Channel Smart Switch',
  description: 'A multi-channel control interface for connected spaces.',
  image: "/pasted-image-1.jpg",
  capabilities: ['Multi-Channel', 'Light', 'Control'],
  filters: ['Lighting', 'Multi-Channel']
},
{
  id: 'p03',
  name: '4-Button Smart Switch',
  category: '4-Button Smart Switch',
  description: 'A compact four-button control in a minimal square form.',
  image: "/pasted-image-2.jpg",
  capabilities: ['4 Buttons', 'Light'],
  filters: ['Lighting']
},
{
  id: 'p04',
  name: 'Multi-Channel Smart Switch',
  category: 'Multi-Channel Smart Switch',
  description: 'A wide-format multi-channel interface for rooms with several circuits.',
  image: "/pasted-image-3.jpg",
  capabilities: ['Multi-Channel', 'Light'],
  filters: ['Lighting', 'Multi-Channel']
},
{
  id: 'p05',
  name: 'Fan Controller',
  category: 'Fan Controller',
  description: 'A dedicated control for fan functions, with clear up and down inputs.',
  image: "/pasted-image-4.jpg",
  capabilities: ['Fan', 'Up', 'Down'],
  filters: ['Fan', 'Controls']
},
{
  id: 'p06',
  name: 'Modular Smart Switch',
  category: 'Modular Smart Switch',
  description: 'A compact modular interface bringing switching and fan control together.',
  image: "/pasted-image-5.jpg",
  capabilities: ['Light', 'Fan', 'Control'],
  filters: ['Lighting', 'Fan']
},
{
  id: 'p07',
  name: 'Multi-Channel Control',
  category: 'Multi-Channel Control',
  description: 'A multi-channel control interface in a clean horizontal layout.',
  image: "/pasted-image-6.jpg",
  capabilities: ['Multi-Channel', 'Control'],
  filters: ['Multi-Channel', 'Controls']
},
{
  id: 'p08',
  name: 'Fan + Light Control',
  category: 'Fan + Light Control',
  description: 'A larger interface for lighting and fan functions across a full room.',
  image: "/pasted-image-7.jpg",
  capabilities: ['Light', 'Fan', 'Control'],
  filters: ['Lighting', 'Fan', 'Multi-Channel']
}];


export const availableProducts = products.filter((p) => Boolean(p.image));