import BtnBack from '@/shared/ui/button-back/ui/BtnBack';
import styles from './styles.module.scss';
import { Document, useGetReportsQuery } from '@/admin/documents-list/api/docupentsApi';
import { useTranslation } from 'react-i18next';
import { translateText } from '@/shared/hooks/useDynamicTranslation';
import { useEffect, useState } from 'react';

const Reports = () => {
  const { data, error, isLoading } = useGetReportsQuery({ page: 0, size: 50 });
  const { t, i18n } = useTranslation();
  const [translatedReports, setTranslatedReports] = useState<Omit<Document, "uploadedAt">[]>([]);

  // Виконуємо переклад при зміні даних або мови
  useEffect(() => {
    if (!data?.content) return;

    const translateReports = async () => {
      const targetLang = i18n.language === "uk" ? "uk" : "en";
      const translated = await Promise.all(
        data.content.map(async (item: Omit<Document, "uploadedAt">) => ({
          id: item.id,
          fileUrl: item.fileUrl,
          fileName: await translateText(item.fileName, targetLang),
          description: await translateText(item.description, targetLang),
        }))
      );
      setTranslatedReports(translated);
    };

    translateReports();
  }, [data, i18n.language]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!translatedReports.length) return <h3>Ще немає документів</h3>;

  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <div className={styles.content}>
          <h4 className={styles.title}>{t("reports")}</h4>
          {translatedReports.map((item) => (
            <div className={styles.block} key={item.id}>
              <p className={styles.subtitle}>{item.fileName}</p>
              <p className={styles.description}>{item.description}</p>
              <a href={item.fileUrl} target="_blank" className={styles.link}>
                {t("linkFile")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Reports;