import QUERY_FIELD_TYPES from './queryFieldTypes';

const SAVED_LOG_QUERIES_CONFIG = {
  'scaler-web': {
    queryId: 10765,
    resultLayout: {
      sections: [
        {
          title: 'Request Details',
          columns: [
            {
              items: [
                {
                  name: 'uuid',
                  label: 'Log UUID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'cloudfront_id',
                  label: 'Cloudfront ID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'timestamp',
                  label: 'Timestamp',
                  type: QUERY_FIELD_TYPES.datetime,
                },
                {
                  name: 'ip_address',
                  label: 'IP Address',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
            {
              items: [
                {
                  name: 'request_type',
                  label: 'Request Method',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'endpoint',
                  label: 'API Endpoint',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'server_ip',
                  label: 'Server IP',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'status_code',
                  label: 'Status Code',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
          ],
        },
        {
          title: 'Request Payload',
          columns: [
            {
              items: [
                {
                  name: 'params',
                  label: 'Request Params',
                  type: QUERY_FIELD_TYPES.rubyHash,
                },
              ],
            },
          ],
        },
        {
          title: 'Complete Log',
          columns: [
            {
              items: [
                {
                  name: 'lines',
                  label: 'Request logs',
                  type: QUERY_FIELD_TYPES.logs,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  'scaler-web-admin': {
    queryId: 10832,
    resultLayout: {
      sections: [
        {
          title: 'Request Details',
          columns: [
            {
              items: [
                {
                  name: 'uuid',
                  label: 'Log UUID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'cloudfront_id',
                  label: 'Cloudfront ID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'timestamp',
                  label: 'Timestamp',
                  type: QUERY_FIELD_TYPES.datetime,
                },
                {
                  name: 'ip_address',
                  label: 'IP Address',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
            {
              items: [
                {
                  name: 'request_type',
                  label: 'Request Method',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'endpoint',
                  label: 'API Endpoint',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'server_ip',
                  label: 'Server IP',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'status_code',
                  label: 'Status Code',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
          ],
        },
        {
          title: 'Request Payload',
          columns: [
            {
              items: [
                {
                  name: 'params',
                  label: 'Request Params',
                  type: QUERY_FIELD_TYPES.rubyHash,
                },
              ],
            },
          ],
        },
        {
          title: 'Complete Log',
          columns: [
            {
              items: [
                {
                  name: 'lines',
                  label: 'Request logs',
                  type: QUERY_FIELD_TYPES.logs,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  'scaler-non-web': {
    queryId: 10811,
    resultLayout: {
      sections: [
        {
          title: 'Job Details',
          columns: [
            {
              items: [
                {
                  name: 'job_id',
                  label: 'Job ID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'timestamp',
                  label: 'Timestamp',
                  type: QUERY_FIELD_TYPES.datetime,
                },
              ],
            },
            {
              items: [
                {
                  label: 'Job Name',
                  name: 'name',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  label: 'Queue',
                  name: 'queue',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
          ],
        },
        {
          title: 'Job Arguments',
          columns: [
            {
              items: [
                {
                  name: 'args',
                  label: 'Arguments',
                  type: QUERY_FIELD_TYPES.rubyHash,
                },
              ],
            },
          ],
        },
        {
          title: 'Complete Log',
          columns: [
            {
              items: [
                {
                  name: 'lines',
                  label: 'Request logs',
                  type: QUERY_FIELD_TYPES.logs,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  'ib-web': {
    queryId: 10819,
    resultLayout: {
      sections: [
        {
          title: 'Request Details',
          columns: [
            {
              items: [
                {
                  name: 'uuid',
                  label: 'Log UUID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'cloudfront_id',
                  label: 'Cloudfront ID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'timestamp',
                  label: 'Timestamp',
                  type: QUERY_FIELD_TYPES.datetime,
                },
                {
                  name: 'ip_address',
                  label: 'IP Address',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
            {
              items: [
                {
                  name: 'request_type',
                  label: 'Request Method',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'endpoint',
                  label: 'API Endpoint',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'server_ip',
                  label: 'Server IP',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'status_code',
                  label: 'Status Code',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
          ],
        },
        {
          title: 'Request Payload',
          columns: [
            {
              items: [
                {
                  name: 'params',
                  label: 'Request Params',
                  type: QUERY_FIELD_TYPES.rubyHash,
                },
              ],
            },
          ],
        },
        {
          title: 'Complete Log',
          columns: [
            {
              items: [
                {
                  name: 'lines',
                  label: 'Request logs',
                  type: QUERY_FIELD_TYPES.logs,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  'ib-non-web': {
    queryId: 10820,
    resultLayout: {
      sections: [
        {
          title: 'Job Details',
          columns: [
            {
              items: [
                {
                  name: 'job_id',
                  label: 'Job ID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'timestamp',
                  label: 'Timestamp',
                  type: QUERY_FIELD_TYPES.datetime,
                },
              ],
            },
            {
              items: [
                {
                  label: 'Job Name',
                  name: 'name',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  label: 'Queue',
                  name: 'queue',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
          ],
        },
        {
          title: 'Job Arguments',
          columns: [
            {
              items: [
                {
                  name: 'args',
                  label: 'Arguments',
                  type: QUERY_FIELD_TYPES.rubyHash,
                },
              ],
            },
          ],
        },
        {
          title: 'Complete Log',
          columns: [
            {
              items: [
                {
                  name: 'lines',
                  label: 'Request logs',
                  type: QUERY_FIELD_TYPES.logs,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  'ib-puma-1': {
    queryId: 10830,
    resultLayout: {
      sections: [
        {
          title: 'Request Details',
          columns: [
            {
              items: [
                {
                  name: 'uuid',
                  label: 'Log UUID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'cloudfront_id',
                  label: 'Cloudfront ID',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'timestamp',
                  label: 'Timestamp',
                  type: QUERY_FIELD_TYPES.datetime,
                },
                {
                  name: 'ip_address',
                  label: 'IP Address',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
            {
              items: [
                {
                  name: 'request_type',
                  label: 'Request Method',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'endpoint',
                  label: 'API Endpoint',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'server_ip',
                  label: 'Server IP',
                  type: QUERY_FIELD_TYPES.string,
                },
                {
                  name: 'status_code',
                  label: 'Status Code',
                  type: QUERY_FIELD_TYPES.string,
                },
              ],
            },
          ],
        },
        {
          title: 'Request Payload',
          columns: [
            {
              items: [
                {
                  name: 'params',
                  label: 'Request Params',
                  type: QUERY_FIELD_TYPES.rubyHash,
                },
              ],
            },
          ],
        },
        {
          title: 'Complete Log',
          columns: [
            {
              items: [
                {
                  name: 'lines',
                  label: 'Request logs',
                  type: QUERY_FIELD_TYPES.logs,
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export default SAVED_LOG_QUERIES_CONFIG;
