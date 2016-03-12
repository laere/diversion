import axios from 'axios';


export const DASHBOARD_ICON_SELECTED = 'DASHBOARD_ICON_SELECTED';


export const selectDashboardIcon = () => {
  return {
    type: DASHBOARD_ICON_SELECTED
  };
};
