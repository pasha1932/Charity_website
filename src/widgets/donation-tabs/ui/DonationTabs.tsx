import Tabs from "@/features/tabs/ui/Tabs";


const DonationTabs: React.FC = () => {
  const tabs = [
    {
      id: "one-time",
      label: "Разова допомога",
      content: (
        <div>
          <h2>Разова допомога</h2>
          <p>Виберіть суму, яку хочете задонатити.</p>
          <button>25 UAH</button>
          <button>100 UAH</button>
        </div>
      ),
    },
    {
      id: "crypto",
      label: "Криптовалюта",
      content: (
        <div>
          <h2>Підтримай нас через криптовалюту</h2>
          <p>Відскануйте QR-код для пожертви.</p>
          <img src="qr-code-placeholder.png" alt="QR Code" />
        </div>
      ),
    },
  ];

  return <Tabs tabs={tabs} />;
};

export default DonationTabs;
