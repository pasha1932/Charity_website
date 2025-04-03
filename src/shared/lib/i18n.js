import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Тексти перекладів
const resources = {
  en: {
    translation: {
      //header
      logo: 'Opportunities',
      forEvery: 'for everyone',
      main: 'Main',
      about: 'About fond',
      news: 'News',
      help: 'Help',
      contacts: 'Contacts',
      fastDon: 'Fast donate',
      changeLang: 'Change language',

      //main
      world: 'A world of opportunities for everyone',
      connectNeeds: 'We connect the needs of the country with opportunities to help everyone',
      becameVol: 'Became a volunteer',

      aboutUs: 'About us',
      aboutText1: 'No barriers – only opportunities! 🚀',
      aboutText21: '“Opportunities for everyone”',
      aboutText2: ' - is an organization that helps people with disabilities, young people and those in need of support to realize their dreams. Work, education, social integration – we are here to help!',
      aboutText3: 'Our mission is to create a society without barriers!',

      fondRes: 'Organizational results',
      weTried: 'We are actively working to create new opportunities for everyone',
      resText1: 'career consultations were conducted, thanks to which 617 people found jobs',
      resText2: 'psycho-emotional support was provided to children',

      ourTeam: 'Our team',
      teamDeskr1: 'Everyone on our team is part of a great mission.',
      teamDeskr2: ' We are different, but we are united by a common desire - to help, support and develop a society where everyone has equal opportunities',
      name1: 'Andriy Sukmanovsky',
      pos1: 'President of the organization',
      name2: 'Ivan Levitsky',
      pos2: 'Head of projects and programs',
      name3: 'Sofia Mandziuk',
      pos3: 'Project manager',
      connectUs: 'Contact us',

      routesAnd: 'Directions and values ​​of the organization',
      routes: 'Directions of our activity:',
      routes1: 'Development of an inclusive society',
      routes2: 'Innovative technologies for social development',
      routes3: 'Volunteering and civic engagement',
      routes4: 'Education and skills development',
      routes5: 'Support for entrepreneurship and career development',
      routes6: 'Culture, ecology and sustainable development',

      values: 'Our values:',
      value1: 'Humanity',
      value2: 'Activity',
      value3: 'Innovation',
      value4: 'Courage',
      value5: 'Development',
      value6: 'Responsibility',

      cowork: 'Applications and requests for cooperation',
      statem: 'Application for legal entities',
      queryState: 'Submit a request for cooperation or financial support for joint charitable initiatives.',
      becamePart: 'Become a partner',

      projects: 'Projects',
      collect1: 'Collection for children`s treatment',
      end: 'Deadline',
      collected: 'Collected',
      donate: 'Donate',

      news: 'News',
      seeAllNews: 'See all news',
      seeAll: 'See all news',
      hideNews: 'Hide some news',

      country: 'Create opportunities with us!',
      helpBtn: 'Help',

      //footer
      official: 'Officially registered public organization “Opportunities for everyone”',
      guarantee: 'Guarantees',
      reports: 'Reports',
      foundingDocuments: 'Founding documents',
      ourAddress: '79000, UKRAINE, OBL. LVIVSKA, R-N. LVIVSKY, S. VELIKI PODLISKY, STREET. INDEPENDENCE, B. 148',

      //payment page
      helpCountry: 'Saving the country together',
      everyGrn: 'Every hryvnia can change a person`s life',
      oneTime: 'One-time assistance',
      monthly: 'Monthly assistance',
      juridic: 'Juridical people',
      monobank: 'Our monobank',
      crypto: 'Cryptocurrency',
      abroad: 'From abroad',
      paymError: "Select donation amount and enter mobile phone number",
      paymWay: 'Choose the method you want to donate',
      paymChoose: 'Choose method',
      paymentDesk: '*Be sure to indicate "Charitable contribution for the implementation of statutory activities" in the designated payment.',
      paymWayDon: 'Select payment method',
      changePayWay: 'Change payment method',
      
      chooseSum: 'Choose the amount you want to donate',
      becameHero: 'Become a superhero for those to whom this is necessary',
      yourSum: 'Your sum',
      agree1: 'I have read and agree to the terms of ',
      agree2: 'the public offer',
      doDepos: 'Make a deposit',
      changeCur: 'Change currency',

      forjuridic: 'Requisites for legal entities',
      address: 'Juridical and actual address:',
      code: 'EDRPOY code:',
      bank: 'Recipient`s bank:',
      receiver: 'Recipient:',
      currency: 'Account currency:',

      foregTitle: 'Foreign exchange account',
      compName: 'Company Name:',
      ibanCode: 'IBAN Code:',
      nameBank: 'Name of the bank:',
      swiftCode: 'Bank SWIFT Code:',
      addressComp: 'Company Address:',


      doMono: 'Support us through Monobank',
      openLink: 'Open link',

      doCrypto: 'Support us through cryptocurrency',

      //form page
      please: 'Please fill out the form below to continue',
      name: 'First Name',
      namepl: 'John',
      lastName: 'Last Name',
      lastNamepl: 'Shevchenko',
      email: 'Email',
      emailpl: 'johnshevch@gmail.com',
      number: 'Phone number',
      message: 'Personal message *optional*',
      send: 'Submit form',
      errorInput: 'Field is required',
      errorText: 'Only letters allowed',
      errorNumber: 'Only numbers allowed',
      errorEmail: 'Enter a valid email',
      errorTel: 'Enter a vaild number',
      enterSome: 'Enter some value',
      sending: 'Sending...',
      successSend: 'Your request has been sent',


      //thanks
      thanks: 'Thank you! We received your response, we will contact you shortly',
      goMain: 'Go to main page',
    
      //form-partner
      formPartTitle: 'Apply for partnership',
      nameOrg: 'Name of organization/company',
      typePart: 'Partner type',
      typeFop: 'FOP',
      typeJurid: 'Legal entity',
      typePublic: 'Public organization',
      contactsDir: 'Contacts of the company director',
      formLastname: 'Last name',
      formFirstname: 'First name',
      formMiddlename: 'Middle name',
      formPhone: 'Phone number',
      formEmail: 'Email address',
      formGoalCoop: 'Goal of cooperation',
      formLink: 'Link to social networks or website',
      formAddress: 'Enter legal address',
      formCode: 'Identification code (EDRPOU)',
      formImf: 'Logo',

      //documents
      reports: 'Reports',
      founds: 'Founding documents',
      linkFile: 'File link',
    },
  },
  uk: {
    translation: {
      //header
      logo: 'Можливості',
      forEvery: 'для кожного',
      main: 'Головна',
      about: 'Про фонд',
      news: 'Новини',
      help: 'Допомога',
      contacts: 'Контакти',
      fastDon: 'Швидкий донат',
      changeLang: 'Змінити мову',

      //main
      world: 'Світ можливостей для кожного',
      connectNeeds: 'З’єднуємо потреби країни з можливостями допомоги кожному',
      becameVol: 'Стати волонтером',

      aboutUs: 'Про нас',
      aboutText1: 'Жодних бар’єрів – лише можливості! 🚀',
      aboutText21: '“Можливості для кожного”',
      aboutText2: ' – це організація, яка допомагає людям з інвалідністю, молоді та тим, хто потребує підтримки, реалізувати свої мрії. Робота, освіта, соціальна інтеграція – ми тут, щоб допомогти!',
      aboutText3: 'Наша місія - створити суспільство без барʼєрів !',

      fondRes: 'Результати організації',
      weTried: 'Ми активно працюємо, щоб створювати нові можливості для кожного',
      resText1: 'проведених карʼєрних консультацій, завдяки яким 617 людей знайшли роботу',
      resText2: 'дітям надано психоемоційну підтримку',

      ourTeam: 'Наша команда',
      teamDeskr1: 'Кожен у нашій команді – це частина великої місії.',
      teamDeskr2: ' Ми різні, але нас об’єднує спільне прагнення – допомагати, підтримувати та розвивати суспільство, де кожен має рівні можливості',
      name1: 'Андрій Сукмановський',
      pos1: 'Президент організації',
      name2: 'Іван Левицький',
      pos2: 'Керівник проєктів та програм',
      name3: 'Софія Мандзюк',
      pos3: 'Проєктна менеджерка',
      connectUs: 'Зв`язок з нами',

      routesAnd: 'Напрями та цінності організації',
      routes: 'Напрямки нашої діяльності:',
      routes1: 'Розвиток інклюзивного суспільства',
      routes2: 'Інноваційні технології для соціального розвитку',
      routes3: 'Волонтерство та громадська активність',
      routes4: 'Освіта та розвиток навичок',
      routes5: 'Підтримка підприємництва та карʼєрний розвиток',
      routes6: 'Культура , екологія та сталий розвиток',

      values: 'Наші цінності:',
      value1: 'Людяність',
      value2: 'Активність',
      value3: 'Інноваційність',
      value4: 'Сміливість',
      value5: 'Розвиток',
      value6: 'Відповідальність',

      cowork: 'Звернення та запити на співпрацю',
      statem: 'Заява для юридичних осіб',
      queryState: 'Подайте запит на співпрацю або фінансову підтримку для спільних благодійних ініціатив.',
      becamePart: 'Стати партнером',
      
      projects: 'Проєкти',
      collect1: 'Збір для лікування дітей',
      end: 'Кінцевий термін',
      collected: 'Зібрано',
      donate: 'Донатити',

      news: 'Новини',
      seeAll: 'Дивитися всі',
      seeAllNews: 'Дивитися всі новини',
      hideNews: 'Приховати деякі новини',

      country: 'Створюй можливості разом із нами!',
      helpBtn: 'Допомогти',

      //footer
      official: 'Офіційно зареєстрована громадська організація “Можливості для кожного”',
      guarantee: 'Гарантії',
      reports: 'Звіти',
      foundingDocuments: 'Установчі документи',
      ourAddress: '79000, УКРАЇНА, ОБЛ. ЛЬВІВСЬКА, Р-Н. ЛЬВІВСЬКИЙ, С. ВЕЛИКІ ПІДЛІСКИ, ВУЛ. НЕЗАЛЕЖНОСТІ, Б. 148',
      //payment page
      helpCountry: 'Рятуємо країну разом',
      everyGrn: 'Кожна гривня здатна змінити життя людини',
      oneTime: 'Разова допомога',
      monthly: 'Щомісячна допомога',
      juridic: 'Юридичні особи',
      monobank: 'Наша monobaнка',
      crypto: 'Криптовалюта',
      abroad: 'З-за кордону',
      paymError: "Виберіть суму донату й введіть номер мобільно телефону",
      paymWay: 'Оберіть спосіб яким ви хочете задонатити',
      paymChoose: 'Обрати спосіб',
      paymentDesk: '*Обов\'язково у призначені платежу вказувати "Благодійний внесок на виконання статутної діяльності"',
      paymWayDon: 'Оберіть спосіб оплати',
      changePayWay: 'Змінити спосіб оплати',

      chooseSum: 'Оберіть суму, яку ви хочете задонатити',
      becameHero: 'Стань супергероєм для тих, кому це необхідно',
      yourSum: 'Ваша сумма',
      agree1: 'Я ознайомився/-лась і погоджуюсь з умовами ',
      agree2: 'публічної оферти',
      doDepos: 'Зробити внесок',
      changeCur: 'Змінити валюту',

      forjuridic: 'Реквізити для юридичних осіб',
      address: 'Адреса юридична та фактична:',
      code: 'Код ЄДРПОУ:',
      bank: 'Банк отримувача:',
      receiver: 'Отримувач:',
      currency: 'Валюта рахунку:',

      foregTitle: 'Валютний рахунок',
      compName: 'Назва компанії:',
      ibanCode: 'IBAN Код:',
      nameBank: 'Назва банку:',
      swiftCode: 'SWIFT Код банку:',
      addressComp: 'Адреса компанії:',

      doMono: 'Підтримай нас через Monobank',
      openLink: 'Відкрити посилання',

      doCrypto: 'Підтримай нас через криптовалюту',

      //form page
      please: 'Будь ласка, заповніть форму нижче щоб продовжити',
      name: 'Імʼя',
      namepl: 'Степан',
      lastName: 'Призвісько',
      lastNamepl: 'Шевченко',
      email: 'Електронна пошта',
      emailpl: 'stepanshevch@gmail.com',
      number: 'Номер телефону',
      message: 'Особисте повідомлення *не обовʼязково*',
      send: 'Відправити форму',
      errorInput: 'Поле є обов`язковим',
      errorText: 'Тільки літери дозволені',
      errorNumber: 'Тільки числа дозволені',
      errorEmail: 'Введіть правильну пошту',
      errorTel: 'Введіть правильний номер',
      enterSome: 'Введіть якесь значення',
      sending: 'Відправлення...',
      successSend: 'Ваша заявка була відправлена',

      //thanks
      thanks: 'Дякуємо! Ми отримали вашу відповідь, найближчим часом ми звʼяжемось з вами',
      goMain: 'На головну',


      //form-partner
      formPartTitle: 'Подати заявку на партнерство',
      nameOrg: 'Назва організації/компанії',
      typePart: 'Тип партнера',
      typeFop: 'ФОП',
      typeJurid: 'Юридична особа',
      typePublic: 'Громадська організація',
      contactsDir: 'Контакти директора компанії',
      formLastname: 'Прізвище',
      formFirstname: 'Ім`я',
      formMiddlename: 'По-батькові',
      formPhone: 'Номер телефону',
      formEmail: 'Електронна адреса',
      formGoalCoop: 'Мета співпраці',
      formLink: 'Посилання на соцмережі або сайт',
      formAddress: 'Введіть юридичну адресу',
      formCode: 'Ідентифікаційний код (ЄДРПОУ)',
      formImf: 'Логотип',

      //documents
      reports: 'Звіти',
      founds: 'Установчі документи',
      linkFile: 'Посилання на файл',
    },
  },
};

i18n
  .use(LanguageDetector) // Визначає мову (localStorage, cookie, браузер)
  .use(initReactI18next)  // Інтеграція з React
  .init({
    resources,
    fallbackLng: 'uk', // Мова за замовчуванням
    interpolation: {
      escapeValue: false, // Для захисту від XSS (не обов'язково в React)
    },
    detection: {
      order: ['localStorage', 'navigator'], // Порядок визначення мови
      caches: ['localStorage'], // Зберігаємо мову в localStorage
    },
  });

export default i18n;