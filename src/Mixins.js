export function arrow({ direction, base, height, color }) {
  let styles = {
    borderStyle: 'solid',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  };
  let halfBase = base / 2;

  switch (direction) {
    case 'up':
      styles.borderWidth = `0 ${halfBase}px ${height}px ${halfBase}px`;
      styles.borderBottomColor = color;
      return styles;
    case 'right':
      styles.borderWidth = `${halfBase}px 0 ${halfBase}px ${height}px`;
      styles.borderLeftColor = color;
      return styles;
    case 'down':
      styles.borderWidth = `${height}px ${halfBase}px 0 ${halfBase}px`;
      styles.borderTopColor = color;
      return styles;
    case 'left':
      styles.borderWidth = `${halfBase}px ${height}px ${halfBase}px 0`;
      styles.borderRightColor = color;
      return styles;
  }

  throw new Error('Invalid direction');
}
