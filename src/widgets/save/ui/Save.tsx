import { useState } from "react";
import styles from './styles.module.scss';
import { HelpBtn } from "@/shared/ui/help-button";
import OneTimeTab from "@/features/one-time-help-tab/ui/OneTimeTab";
import { JuridicPeopleTab } from "@/features/juridic-people-tab";
import { CryptoMonoTab } from "@/features/crypto-mono-tab";

const Save = () => {
  const tabs = [
    {
      id: "one-time",
      label: "Разова допомога",
      content: (
        <OneTimeTab />
      ),
    },
    {
      id: "monthly-time",
      label: "Щомісячна допомога",
      content: (
        <OneTimeTab />
      ),
    },
    {
      id: "judge-person",
      label: "Юридичні особи",
      content: (
        <JuridicPeopleTab />
      ),
    },
    {
      id: "monobank",
      label: "Наша монобанка",
      content: (
        <CryptoMonoTab title="Підтримай нас через Monobank" />
      ),
    },
    {
      id: "crypto",
      label: "Криптовалюта",
      content: (
        <CryptoMonoTab title="Підтримай нас через криптовалюту" />
      ),
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return ( 
    <section className={styles.section}>
      <div className={styles.topContent}>
        <div className="container">
          <h2 className={styles.title}>Рятуємо країну разом</h2>
          <h6 className={styles.subtitle}>Кожна гривня здатна змінити життя людини</h6>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <HelpBtn key={tab.id} onClick={() => setActiveTab(tab.id)} isActive={activeTab === tab.id}>
            {tab.label}
            </HelpBtn>
        ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.bottom}>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
      </div>
    </section>
   );
}
 
export default Save;