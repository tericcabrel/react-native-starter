const BUTTON_SIZE = 40;
const MARGIN_RIGHT = 16;
const MARGIN_LEFT = 16;

const getDefaultStyle = (isLight: boolean) => ({
  color: isLight ? 'rgba(0, 0, 0, 0.8)' : '#fff',
  fontSize: 18,
  marginTop: 10
});

export { BUTTON_SIZE, getDefaultStyle, MARGIN_RIGHT, MARGIN_LEFT };
