import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import styles from './styles.module.scss';
import { SendFormBtn } from '@/features/send-form';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
import { useCreatePartnerMutation } from '@/widgets/parters/api/api';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';

interface FormData {
  partnerName: string;
  partnerType: string;
  directorFirstName: string;
  directorLastName: string;
  directorMiddleName: string;
  directorPhoneNumber: string;
  directorEmail: string;
  cooperationGoal: string;
  siteUrl: string;
  legalAddress: string;
  identificationCode: string;
  logo: File[];
}

const options = [
  { value: 'LEGAL_PERSON', label: 'Юридична особа' },
  { value: 'FOP', label: 'ФОП' },
  { value: 'COOPERATIVE', label: 'Громадська організація' },
];

const CreateFormPartner = () => {
  const { t } = useTranslation();
  const { control, register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormData>();

  const [submitForm, { isLoading }] = useCreatePartnerMutation();

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append('partnerName', data.partnerName);
      formData.append('partnerType', data.partnerType);
      formData.append('directorFirstName', data.directorFirstName);
      formData.append('directorLastName', data.directorLastName);
      formData.append('directorMiddleName', data.directorMiddleName);
      formData.append('directorPhoneNumber', data.directorPhoneNumber);
      formData.append('directorEmail', data.directorEmail);
      formData.append('cooperationGoal', data.cooperationGoal);
      formData.append('siteUrl', data.siteUrl);
      formData.append('legalAddress', data.legalAddress);
      formData.append('identificationCode', data.identificationCode);
      if (data.logo) {
        formData.append('logo', data.logo[0]); // Звертаємо увагу, що avatar — масив файлів
      }
      // Відправка даних через RTK Query
      await submitForm(formData).unwrap();

      alert('Партнер був успішно доданий')
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      // toast.error(t('formError')); // Повідомлення про помилку
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <div className={styles.content}>
          <h4 className={styles.title}>Заповніть форму щоб створити партнера</h4>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label}>
              <h6 className={styles.formTitle}>Назва організації/компанії</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть назву"
                {...register('partnerName', { required: 'Вкажіть назву організації' })}
              />
              {errors.partnerName && <span>{errors.partnerName.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Тип партнера</h6>
              <Controller
                name="partnerType"
                control={control}
                rules={{ required: 'Тип партнера обов’язковий' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    placeholder="Оберіть тип партнера"
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption?.value)
                    }
                    value={options.find(
                      (option) => option.value === field.value
                    )}
                  />
                )}
              />
              {errors.partnerType && <span>{errors.partnerType.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Контакти директора компанії</h6>
              <input
                style={{marginBottom: '10px'}}
                className={styles.formInput}
                placeholder="Прізвище"
                {...register('directorFirstName', { required: 'Вкажіть прізвище директора' })}
              />
              {errors.directorFirstName && <span>{errors.directorFirstName.message}</span>}
              <input
                style={{marginBottom: '10px'}}
                className={styles.formInput}
                placeholder="Ім'я"
                {...register('directorLastName', { required: 'Вкажіть ім`я директора' })}
              />
              {errors.directorLastName && <span>{errors.directorLastName.message}</span>}
              <input
                style={{marginBottom: '10px'}}
                className={styles.formInput}
                placeholder="По-батькові"
                {...register('directorMiddleName', { required: 'Вкажіть по-батькові директора' })}
              />
              {errors.directorMiddleName && <span>{errors.directorMiddleName.message}</span>}
              <input
                style={{marginBottom: '10px'}}
                className={styles.formInput}
                placeholder="Номер телефону"
                {...register('directorPhoneNumber', { required: 'Вкажіть номер телефону директора' })}
              />
              {errors.directorPhoneNumber && <span>{errors.directorPhoneNumber.message}</span>}
              <input
                style={{marginBottom: '10px'}}
                className={styles.formInput}
                placeholder="Електронна адреса"
                type="email"
                {...register('directorEmail', { required: 'Вкажіть електронну адресу директора' })}
              />
              {errors.directorEmail && <span>{errors.directorEmail.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Мета співпраці</h6>
              <textarea
                className={styles.formTextarea}
                placeholder="Опишіть мету співпраці"
                {...register('cooperationGoal', { required: 'Вкажіть мету співпраці' })}
              />
              {errors.cooperationGoal && <span>{errors.cooperationGoal.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Посилання на соцмережі або сайт</h6>
              <input
                className={styles.formInput}
                placeholder="https://example.com"
                {...register('siteUrl', { required: 'Вкажіть посилання' })}
              />
              {errors.siteUrl && <span>{errors.siteUrl.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Юридична адреса</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть юридичну адресу"
                {...register('legalAddress', { required: 'Вкажіть юридичну адресу' })}
              />
              {errors.legalAddress && <span>{errors.legalAddress.message}</span>}
            </label>

            <label className={styles.label}>
              <h6 className={styles.formTitle}>Ідентифікаційний код (ЄДРПОУ)</h6>
              <input
                className={styles.formInput}
                placeholder="Введіть код ЄДРПОУ"
                {...register('identificationCode', { required: 'Вкажіть код ЄДРПОУ' })}
              />
              {errors.identificationCode && <span>{errors.identificationCode.message}</span>}
            </label>
             <label className={styles.label}>
                <h6 className={styles.formTitle}>Картинка</h6>
                <input className={styles.formInput} style={{paddingTop: '20px'}} type="file"
                {...register('logo', { required: t('errorEmail') })}
                />
                {errors.logo && <span>{errors.logo.message}</span>}
              </label>
            <SendFormBtn disabled={isLoading || !isValid} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateFormPartner;