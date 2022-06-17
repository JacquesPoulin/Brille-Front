// Interface import declaration
import { INavlink } from './../src/interfaces/INavlink';

// Datas to map in the navbar
const navLinks: INavlink[] = [
  {
    id: 1,
    path: '/collection',
    leftTitle: 'Nos sacs',
    dropdown: true,
  },
  {
    id: 2,
    path: '/univers',
    leftTitle: 'Univers Brille',
    dropdown: true,
  },
  {
    id: 3,
    path: '/contact',
    leftTitle: 'Contact',
    dropdown: false,
  },
  {
    id: 4,
    path: '',
    rightTitle: 'Rechercher',
    dropdown: false,
  },
  {
    id: 5,
    path: '/compte',
    rightTitle: 'Compte',
    dropdown: false,
  },
  {
    id: 6,
    path: '/panier',
    rightTitle: 'Panier',
    dropdown: false,
  },
];

export default navLinks;
