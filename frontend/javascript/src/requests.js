import QuidRequests from 'quidjs';
import Conf from '@/conf';

const requests = new QuidRequests({
  namespace: Conf.namespace,
  timeouts: {
    accessToken: "1m",
    refreshToken: "24h"
  },
  quidUri: Conf.quidUri,
  axiosConfig: {
    baseURL: Conf.serverUri,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
  },
  verbose: true
})

export default requests;