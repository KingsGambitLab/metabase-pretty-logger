import QUERY_FIELD_TYPES from 'data/queryFieldTypes';
import StringFieldRenderer from '../StringFieldRenderer';
import DatetimeFieldRenderer from '../DatetimeFieldRenderer';
import RubyHashFieldRenderer from '../RubyHashFieldRenderer';
import LogsFieldRenderer from '../LogsFieldRenderer';

const FIELD_TYPE_COMPONENT_MAP = {
  [QUERY_FIELD_TYPES.string]: StringFieldRenderer,
  [QUERY_FIELD_TYPES.datetime]: DatetimeFieldRenderer,
  [QUERY_FIELD_TYPES.rubyHash]: RubyHashFieldRenderer,
  [QUERY_FIELD_TYPES.logs]: LogsFieldRenderer,
};

function QueryFieldRenderer({ field, value, ...remainingProps }) {
  const FieldRenderer = FIELD_TYPE_COMPONENT_MAP[field.type];
  return (
    <FieldRenderer
      field={field}
      value={value}
      {...remainingProps}
    />
  );
}

export default QueryFieldRenderer;
