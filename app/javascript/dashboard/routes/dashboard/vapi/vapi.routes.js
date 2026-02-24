import { frontendURL } from '../../../helper/URLHelper';
import VapiIndex from './Index.vue';
import CallLogs from './CallLogs.vue';
import CallStats from './CallStats.vue';

export const routes = [
    {
        path: frontendURL('accounts/:accountId/vapi'),
        component: VapiIndex,
        children: [
            {
                path: '',
                redirect: { name: 'vapi_call_logs' },
            },
            {
                path: 'logs',
                name: 'vapi_call_logs',
                component: CallLogs,
                meta: {
                    permissions: ['administrator', 'agent'],
                },
            },
            {
                path: 'stats',
                name: 'vapi_call_stats',
                component: CallStats,
                meta: {
                    permissions: ['administrator', 'agent'],
                },
            },
        ],
    },
];
