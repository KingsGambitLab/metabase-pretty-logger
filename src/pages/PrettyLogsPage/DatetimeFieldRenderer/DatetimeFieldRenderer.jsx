import { DateUtils } from '@vectord/utils';

function DatetimeFieldRenderer({ field, value }) {
  return (
    <div className="m-b-s">
      <div className="h5 no-mgn-b hint bold">
        {field.label} (As per local timezone)
      </div>
      <div>
        {DateUtils.toDDMMMYYYY(value)}, {DateUtils.toHHmm(value)} ({value})
      </div>
    </div>
  );
}

export default DatetimeFieldRenderer;
