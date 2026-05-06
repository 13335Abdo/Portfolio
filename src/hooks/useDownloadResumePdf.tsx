import {useCallback, useState} from 'react';

export const useDownloadResumePdf = () => {
  const [downloading, setDownloading] = useState(false);

  const download = useCallback(async () => {
    setDownloading(true);
    try {
      const a = document.createElement('a');
      a.href = '/Abdelruhman_Mohamed_CV.docx';
      a.download = 'Abdelruhman_Mohamed_CV.docx';
      a.click();
    } finally {
      setDownloading(false);
    }
  }, []);

  return {download, downloading};
};