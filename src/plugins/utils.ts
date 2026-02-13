function humanFileSize(size) {
    if (size < 1024) return size + ' B'
    const i = Math.floor(Math.log(size) / Math.log(1024))
    const num = (size / Math.pow(1024, i))
    const round = Math.round(num)
    const value = round < 10 ? num.toFixed(2) : round < 100 ? num.toFixed(1) : round
    return `${value} ${'KMGTPEZY'[i - 1]}B`
}

function formatDate(data){
  const date = new Date(data);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

async function copyToClipboard(content) {
  await navigator.clipboard.writeText(content);
}

export default {
  install(app, options) {
    app.config.globalProperties.$humanFileSize = (size) => {
        return humanFileSize(size);
    };
    app.config.globalProperties.$copyToClipboard = async (content) => {
        await copyToClipboard(content);
    };
    app.config.globalProperties.$formatDate = (data) => {
        return formatDate(data);
    };
  },
  humanFileSize, copyToClipboard, formatDate,
}