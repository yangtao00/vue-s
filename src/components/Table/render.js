export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function
  },
  render: (h, ctx) => {
    const { row, column, index, render } = ctx.props;
    const params = {
      row,
      column,
      index
    }
    return render(h, params);
  }
}