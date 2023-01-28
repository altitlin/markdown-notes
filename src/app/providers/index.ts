import compose from 'compose-function'

import { withRouter } from 'app/providers/with-router'
import { withReactQuery } from 'app/providers/with-react-query'

export const withProviders = compose(withReactQuery, withRouter)
