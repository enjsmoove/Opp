/**
 *
 * Asynchronously loads the component for IndustryView
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
