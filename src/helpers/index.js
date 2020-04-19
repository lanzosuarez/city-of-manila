export const isMobile = () => window.innerWidth <= 576;
export const getHash = path => `#${path.split('#')[1]}`;

export const downloadFile = async (url, filename) => {
  try {
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    const response = await fetch(url);
    const blob = await response.blob();
    a.href = window.URL.createObjectURL(blob);
    a.setAttribute('download', `${filename}.pdf`);
    a.click();
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  } catch (error) {
    throw error;
  }
};

export const searchItems = (term, arr) => {
  if (term === '') return arr;
  const regex = new RegExp(term, 'ig');

  return arr.filter(
    i => regex.test(i.node.name) || regex.test(i.node.description.description)
  );
};

export const pipe = (...fns) => val =>
  fns.reduce((currentValue, currentFn) => currentFn(currentValue), val);
