/**
 *
 * Asynchronously loads the component for JobBrowser
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
