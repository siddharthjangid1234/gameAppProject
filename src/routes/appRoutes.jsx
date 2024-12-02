import PlayerLoginScreen from '../auth/login';
import GameScreen from '../main/GameScreen';
import NavigationRoutes from './NavigationRoutes';

const commonOptions = {
  headerShown: false,
};

export const authScreens = {
  [NavigationRoutes.Login]: {
    component: PlayerLoginScreen,
    options: commonOptions,
  },
};

export const mainScreens = {
  [NavigationRoutes.gameScreen]: {
    component: GameScreen,
    options: commonOptions,
  },
};
