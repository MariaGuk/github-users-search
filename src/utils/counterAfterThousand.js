export const counterAfterThousand = (followers) => {
  if (followers < 1000) {
    return followers;
  }
  return (followers / 1000).toFixed(1) + 'k';
};