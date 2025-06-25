function formatMetabaseQueryResult(result) {
  const { cols, rows } = result.data;
  return rows.map((row) => {
    return cols.reduce((formattedRow, col, index) => {
      return {
        ...formattedRow,
        [col.name]: row[index],
      };
    }, {});
  });
}

export default formatMetabaseQueryResult;
