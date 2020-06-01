/**
 *
 * Asynchronously loads the component for Button
 *
 */
import { lazyLoad } from 'utils/loadable';

export const SimpleButton = lazyLoad(
  () => import('./index'),
  module => module.SimpleButton,
);
