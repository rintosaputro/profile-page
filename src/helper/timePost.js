const timePost = (date) => {
  const second = Math.floor((new Date() - date) / 1000);
  let interval = second / 31536000;
  if (interval > 1) return `${Math.floor(interval)} tahun lalu`;
  interval = second / 2592000;
  if (interval > 1) return `${Math.floor(interval)} bulan lalu`;
  interval = second / 86400;
  if (interval > 1) return `${Math.floor(interval)} hari lalu`;
  interval = second / 3600;
  if (interval > 1) return `${Math.floor(interval)} jam lalu`;
  interval = second / 60;
  if (interval > 1) return `${Math.floor(interval)} menit lalu`;
  return `${Math.floor(second)} detik lalu`;
};

export default timePost;
