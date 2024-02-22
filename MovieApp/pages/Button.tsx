import {IMAGES} from '../../constants/Images';

export const ButtonSchema = [
  {
    image: IMAGES.profile,
    title: 'Manage Profile',
    text: 'Edit name, Email, change password',
    isBtn: false,
  },
  {
    image: IMAGES.bell,
    title: 'Reminders',
    text: 'Receive updates about saved courses',
    isBtn: true,
  },
  {
    image: IMAGES.active,
    title: 'Notifications',
    text: 'Receive news about courses',
    isBtn: true,
  },
  {
    image: IMAGES.language,
    title: 'Language',
    text: 'set your language',
    isBtn: false,
  },
  {
    image: IMAGES.terms,
    title: 'Terms & Conditions',
    text: '',
    isBtn: false,
  },
  {
    image: IMAGES.logout,
    title: 'Logout',
    text: '',
    isBtn: false,
  },
];