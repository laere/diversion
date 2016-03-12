import axios from 'axios';


export const SELECTED_ICON = 'SELECTED_ICON';


export const selectedIcon = () => {
  return {
    type: SELECTED_ICON
  };
};
